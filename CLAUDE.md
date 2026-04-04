# SixTONESクイズ アプリ仕様書

## プロジェクト概要
SixTONESファン向けのクイズWebアプリ。フリープレイと絆クイズの2モードを持ち、ポイント・ストーン（💎）システム、ランキング機能を備える。Firebase Authentication（Google Sign-In）でユーザー管理。

## 技術スタック
- **フロントエンド**: Vanilla JS、HTML、CSS（モバイルファースト）
- **バックエンド**: Firebase Firestore + Firebase Authentication（Google Sign-In）
- **ホスティング**: Firebase Hosting
- **ファイル構成**: 単一ファイル構成を維持（app.jsを分割しない）
- **クイズデータ**: Firestoreのquizzesコレクションで管理（app.jsにハードコードしない）
- **デプロイ**: Firebase Hosting（`firebase deploy`）
- **管理画面**: admin.html（管理者UIDで制限）

## 現在のプロジェクト状態（2026年4月時点）

### 完了済み
- モバイルファースト UI/UX リデザイン（スクロール不要なホーム画面）
- ゴールド/黒テーマのロゴ、絵文字→SVGアイコン置換
- Firebase Authentication（Google Sign-In）導入、localStorage完全廃止
- Firestoreドキュメントパスをusername→UID基盤に移行
- クイズデータをFirestoreに移行（app.jsから削除済み）
- クイズ提案機能（💎獲得画面）、間違い報告機能
- 管理画面（admin.html）: 提案の採用/却下、報告確認、クイズCRUD
- 採用時に提案者へ💎3個自動付与
- 遊び方（ヘルプ）画面
- 旧称号システム完全削除（ランク制のみ）

### 次のタスク（優先度順）
1. **Web版に広告（Google AdSense）を挿入**
2. **PWA化**（ServiceWorker + manifest.json）
3. **Capacitorで Android/iOS アプリ化**
4. アプリ内に AdMob 広告を追加（Capacitor経由）

---

## ファイル構成

```
sixtones-quiz/
├── index.html              # メインHTML（全画面のDOM）
├── app.js                  # アプリロジック（単一ファイル）
├── styles.css              # スタイル（モバイルファースト）
├── admin.html              # 管理画面（管理者UID制限付き）
├── upload-quizzes.html     # クイズ一括投入スクリプト（使い捨て、削除可）
├── firebase-config.js      # Firebase設定（.gitignore対象、デプロイには含める）
├── firebase-config.example.js  # Firebase設定テンプレート
├── firebase.json           # Firebase Hosting設定
├── .gitignore              # firebase-config.js を除外
└── CLAUDE.md               # この仕様書
```

### firebase.json の注意点
- `ignore` に `"!firebase-config.js"` を入れて、.gitignore対象でもデプロイに含める
- `rewrites` は使わない（SPA rewriteがあると firebase-config.js が404になる）

```json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**",
      "!firebase-config.js"
    ]
  }
}
```

---

## 画面一覧と遷移

```
ログイン画面（loginScreen）
  └─ ユーザー名設定画面（usernameScreen）※初回のみ
      └─ ホーム画面（startScreen）
            ├─ ゲームメニュー画面（gameMenuScreen）
            │    ├─ フリープレイ画面（quizScreen）※初級/中級/上級/ランダム
            │    │    └─ 結果画面（resultScreen）
            │    └─ 絆クイズ画面（bondQuizScreen）※4〜特級選択
            │         └─ 絆結果画面（bondResultScreen）
            ├─ クイズ履歴画面（historyScreen）
            │    └─ 履歴詳細画面（historyDetailScreen）
            ├─ プロフィール画面（profileScreen）
            ├─ 💎獲得画面（stoneGetScreen）※クイズ提案フォーム
            ├─ ツール画面（toolScreen）
            ├─ 遊び方画面（helpScreen）
            └─ ランキング画面（rankingScreen）
                 └─ 過去シーズン一覧（rankingHistoryScreen）
                      └─ 過去ランキング画面（oldRankingScreen）
```

### 画面切り替えルール
- `showScreen('screenId')` 関数で統一
- ステータスバー: ホーム画面のみ表示
- ヘッダー: ホーム画面・ログイン画面・ユーザー名設定画面では非表示
- コンテナ: ホーム画面系は `home-layout`（垂直中央寄せ）

---

## 認証（Firebase Authentication）

- **Google Sign-In** のみ使用
- `firebase.auth().onAuthStateChanged()` で状態監視
- グローバル変数: `currentUser`（Firebase Auth user）、`uid`（UID）、`username`（表示名）
- Firestoreドキュメントは全てUIDをキーに使用: `users/{uid}`, `history/{uid}/items/{autoId}`
- ランキングの表示名には `username` を使用
- `localStorage` は一切使わない
- 管理者UID: `uqCuJ40DKTV5u3PFHAFG3ogwrnX2`

---

## ポイント（P）システム

### 獲得条件（フリープレイ正解時）
| 難易度 | 獲得P |
|--------|-------|
| 初級   | 1P    |
| 中級   | 2P    |
| 上級   | 3P    |

### ランク制（累計ポイントで昇格・降格なし）
| ランク  | 必要P（累計） |
|---------|--------------|
| 新規リスナー | 0〜          |
| 見習いンズ | 50〜         |
| チムスト | 150〜        |
| サタスペリスナー | 350〜        |
| おやーンズ | 700〜        |
| 最髙地優吾 | 1500〜       |

---

## ストーン（💎）システム

### 獲得条件
| 条件 | 獲得数 |
|------|--------|
| ログインボーナス（1日1回） | 💎1個 |
| クイズ提案が管理者に採用された時 | 💎3個 |
| 動画広告視聴（将来実装） | 💎2個 |

### 消費条件
| 用途 | 消費数 |
|------|--------|
| 絆クイズ 4〜1級 | 💎1個 |
| 絆クイズ 特級 | 💎3個 |
| 履歴件数 +5件拡張 | 💎5個（上限100件） |

---

## フリープレイ仕様

- タイマー機能：**なし**
- 問題数：10問/セット
- 難易度選択：初級 / 中級 / 上級 / ランダム（全難易度混合）
- 解説ボタン：回答後に表示（explanationが空なら非表示）
- 間違い報告ボタン：回答後に常に表示
- ポイント：正解時に難易度別Pを加算
- 「次の問題へ」ボタンで手動進行

---

## 絆クイズ仕様

| 級   | 問題数 | 合格ライン | 💎消費 | 出題難易度       |
|------|--------|-----------|--------|-----------------|
| 4級  | 3問    | 1問正解   | 1個    | 初級のみ         |
| 3級  | 5問    | 2問正解   | 1個    | 初級＋中級       |
| 2級  | 7問    | 3問正解   | 1個    | 全難易度         |
| 1級  | 7問    | 5問正解   | 1個    | 中級＋上級       |
| 特級 | 7問    | 全問正解  | 3個    | 上級のみ         |

- タイマー：**15秒/問**（フリープレイでは使わない）
- 回答後1.5秒で自動進行
- 合格時：Xシェアボタンを表示

---

## クイズデータ（Firestoreで管理）

### Firestoreコレクション: quizzes/{autoId}
```js
{
  question: "問題文",
  options: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],
  correct: 0,              // 正解のインデックス（0始まり）
  difficulty: "初級",      // "初級" | "中級" | "上級"
  explanation: "",         // 解説テキスト（空文字可）
  randomizeOptions: true,  // falseの場合は選択肢をシャッフルしない
  createdAt: timestamp
}
```

- app.js の `loadQuizData()` で init 時に全問取得し `quizData` 配列に格納
- 問題の追加・編集は管理画面（admin.html）またはFirebase Consoleから

---

## Firestore データ構造

### users/{uid}
```
{
  uid: string,              // Firebase Auth UID
  username: string,         // 表示用ユーザー名
  points: number,           // 累計ポイント（リセットなし）
  stones: number,           // 現在のストーン数
  rank: string,             // "新規リスナー" | ... | "最髙地優吾"
  correctCount: number,     // 累計正解数
  totalCount: number,       // 累計回答数
  historyLimit: number,     // 履歴表示件数（初期値: 5、最大: 100）
  loginBonusDate: string,   // 最終ログインボーナス取得日（YYYY-MM-DD）
  title: object,            // 旧称号（現在未使用）
  seasonPoints: number,     // 今シーズンのポイント（月次リセット）
  grade: string,            // 絆クイズの最高取得級（"-" | "4級" | ... | "特級"）
  updatedAt: timestamp
}
```

### rankings/{seasonId}
```
// seasonId形式: "2026-04"（年-月）
{
  seasonNumber: number,
  seasonId: string,
  endsAt: string,
  data: [                   // 上位50位まで保存
    { username, points, rank, grade }
  ],
  updatedAt: timestamp
}
```

### history/{uid}/items/{autoId}
```
{
  question, options, correct, userAnswer, isCorrect,
  points, difficulty, explanation, mode, grade, timestamp
}
```

### proposals/{autoId}
```
{
  uid, username, question, options, correct,
  difficulty, explanation,
  status: "pending" | "approved" | "rejected",
  createdAt, approvedAt?, rejectedAt?
}
```

### reports/{autoId}
```
{
  uid, username, question, options, correct,
  difficulty, detail,
  status: "pending" | "resolved",
  createdAt, resolvedAt?
}
```

---

## 管理画面（admin.html）

- URL: `https://（デプロイURL）/admin.html`（アプリからはリンクなし）
- 管理者UID制限: `uqCuJ40DKTV5u3PFHAFG3ogwrnX2` のみアクセス可
- 機能:
  - **クイズ提案**: 採用→quizzesに追加+提案者に💎3個 / 却下
  - **間違い報告**: 確認→対応済みにマーク
  - **クイズ一覧**: 難易度フィルタ、削除
  - **統計**: クイズ総数、未確認提案数、未確認報告数、ユーザー数

---

## SNSシェア（X/Twitter）

- 絆クイズ合格時の結果画面
- プロフィール画面の「シェア」ボタン
- `shareToX(text)` 関数で `twitter.com/intent/tweet` を開く

---

## ランキング仕様

- シーズン: 毎月リセット（月末23:59終了）
- シーズン番号: (year - 2026) * 12 + month
- 現在のランキング: 上位50位
- 過去データ: 上位20位を最大11シーズン分保持

---

## UIデザイン方針

- **モバイルファースト**: スマホでスクロール不要が基本方針
- **テーマ**: ゴールド (#daa520) + 黒背景 (#1a1a2e)
- **アイコン**: 絵文字ではなくインラインSVG
- **レスポンシブ**: clamp()、dvh、flexbox中央寄せを活用
- **ヘッダー**: サブ画面では小さく表示、ホーム画面では非表示

---

## 注意事項・実装ルール

1. **app.jsは単一ファイルを維持**（分割しない）
2. **firebase-config.jsはGitにコミットしない**（.gitignoreに追加済み）
3. **メダルという単語は使わない** → ストーン（💎）に統一
4. **タイマーはフリープレイでは使わない**（絆クイズのみ15秒）
5. 問題の `explanation` が空文字の場合は解説ボタンを非表示にする
6. ストーン不足時は該当ボタンをグレーアウト＋メッセージ表示
7. `localStorage` は使わない（全データFirestore管理）
8. Firestoreパスは全てUID基盤（usernameは表示用のみ）
9. firebase.jsonに `rewrites` を入れない（firebase-config.jsが404になる）

---

## 今後の作業手順書

### STEP 1: Web版に広告（Google AdSense）を挿入

**目的**: 収益化の基盤を作る（Android化前にWeb版で先行導入）

**事前準備（ユーザー作業）**:
- Google AdSense アカウント作成（https://www.google.com/adsense/）
- サイト審査の申請（Firebase HostingのURLで申請）
- 審査通過後、広告ユニットIDを取得

**実装内容**:
- index.html に AdSense スクリプトタグ追加
- 広告表示位置（候補）:
  - フリープレイ結果画面（resultScreen）の下部
  - 絆クイズ結果画面（bondResultScreen）の下部
  - ホーム画面のナビボタン下
- ユーザー体験を損なわない控えめな配置を心がける

**注意**:
- AdSense審査にはある程度のコンテンツ量が必要
- 審査に時間がかかる場合があるので、先にSTEP 2を並行してもOK

### STEP 2: PWA化（ServiceWorker + manifest.json）

**目的**: Capacitorでのアプリ化の前提条件 + Webでも「ホーム画面に追加」対応

**実装内容**:
1. `manifest.json` を作成
   - name: "SixTONESクイズ"（仮、商標確認後に変更の可能性あり）
   - short_name: "STクイズ"
   - theme_color: "#1a1a2e"
   - background_color: "#1a1a2e"
   - display: "standalone"
   - icons: 192x192, 512x512（PNG、作成が必要）
2. `sw.js`（ServiceWorker）を作成
   - 静的ファイルのキャッシュ（index.html, app.js, styles.css）
   - オフライン時のフォールバック表示
   - Firestoreデータはオンライン前提（キャッシュしない）
3. index.html に manifest.json のリンクと ServiceWorker 登録コードを追加

**事前に必要なもの（ユーザー作業）**:
- アプリアイコン画像の用意（512x512px のPNG、できれば192x192も）
  - 現在のゴールド/黒のロゴデザインをベースに作成

### STEP 3: Capacitor プロジェクト初期化

**目的**: Web アプリを Android/iOS ネイティブアプリとしてビルド可能にする

**事前準備（ユーザー作業）**:
- Node.js のインストール（https://nodejs.org/）
- Android Studio のインストール（https://developer.android.com/studio）
- Google Play Console アカウント作成（$25、https://play.google.com/console/）
- **パッケージ名を決める**（例: `com.yourname.sixtonesquiz`、後から変更不可）
- **プライバシーポリシーURL**を用意（Google Play必須）

**実装内容**:
1. `npm init` でpackage.json作成
2. `npm install @capacitor/core @capacitor/cli` でCapacitorインストール
3. `npx cap init` でCapacitor初期化（appName, appId=パッケージ名 を指定）
4. `capacitor.config.ts` の設定（webDir を `.` に指定）
5. `npx cap add android` でAndroidプロジェクト追加
6. `npx cap sync` でWebアセットをAndroidプロジェクトにコピー

### STEP 4: Android ビルドとテスト

**実装内容**:
1. `npx cap open android` でAndroid Studioを開く
2. エミュレータまたは実機で動作確認
3. Firebase設定:
   - Firebase Console → プロジェクト設定 → アプリを追加 → Android
   - パッケージ名を入力、`google-services.json` をダウンロード
   - `android/app/` に `google-services.json` を配置
4. Digital Asset Links の設定（Google Sign-In用）:
   - 署名のSHA-256フィンガープリントを取得
   - Firebase Console → Authentication → 承認済みドメインにlocalhost追加
5. テスト項目:
   - Google ログイン/ログアウト
   - クイズ出題・回答・結果表示
   - ストーン・ポイントの保存/読み込み
   - 絆クイズ（タイマー動作含む）
   - クイズ提案・間違い報告

### STEP 5: AdMob 広告追加（Capacitorプラグイン）

**事前準備（ユーザー作業）**:
- Google AdMob アカウント作成（https://admob.google.com/）
- アプリを登録して広告ユニットIDを取得

**実装内容**:
1. `npm install @capacitor-community/admob` でAdMobプラグイン追加
2. バナー広告 or インタースティシャル広告の実装
3. 広告表示タイミング:
   - フリープレイ結果画面
   - 絆クイズ結果画面
   - （オプション）動画広告視聴で💎2個獲得

### STEP 6: Google Play リリース

**実装内容**:
1. アプリ署名鍵（Keystore）の作成
   - **Google Play App Signing を利用**（推奨: Googleが署名鍵を安全に保管）
   - アップロード鍵は Googleドライブ等にバックアップ
2. AAB（Android App Bundle）のビルド
   - Android Studio → Build → Generate Signed Bundle
3. Google Play Console でストア掲載情報を作成:
   - アプリ名（商標考慮）
   - 説明文（日本語）
   - スクリーンショット（最低2枚、スマホサイズ）
   - フィーチャーグラフィック（1024x500px）
   - プライバシーポリシーURL
   - カテゴリ: エンタメ or トリビア
4. 内部テスト → クローズドテスト → 製品版リリース

### 将来: iOS リリース

- 同じCapacitorプロジェクトから `npx cap add ios` でiOSプロジェクト追加
- **Mac + Xcode が必須**
- Apple Developer Program 登録（年間$99）
- App Store Connect でアプリ提出

---

## 商標に関する注意

- 「SixTONES」はSTARTO ENTERTAINMENTの商標の可能性が高い
- アプリ名には「非公式」を明記するのが安全
  - 例: 「SixTONESファンクイズ（非公式）」
- アプリ説明文に免責事項を記載:
  - 「このアプリはSixTONESおよびSTARTO ENTERTAINMENTとは一切関係ありません」
- 商標検索: J-PlatPat（https://www.j-platpat.inpit.go.jp/）で確認可能
