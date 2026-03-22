# SixTONESクイズ Firebase版 セットアップガイド

## 1. Firebaseプロジェクトの作成

1. [Firebase Console](https://console.firebase.google.com/) にアクセス
2. 「プロジェクトを追加」をクリック
3. プロジェクト名を入力（例: sixtones-quiz）
4. Google Analyticsは必要に応じて設定
5. プロジェクトを作成

## 2. Firestore Databaseの設定

1. Firebase Consoleで作成したプロジェクトを開く
2. 左メニューから「Firestore Database」を選択
3. 「データベースを作成」をクリック
4. **本番環境モード**を選択
5. ロケーションは「asia-northeast1 (Tokyo)」を推奨
6. 「有効にする」をクリック

### セキュリティルールの設定

Firestoreの「ルール」タブで以下のルールを設定：

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read: if true;
      allow write: if userId == request.resource.data.username;
    }
    
    match /rankings/{weekId} {
      allow read: if true;
      allow write: if true;
    }
  }
}
```

## 3. Firebase設定の取得

1. Firebase Consoleのプロジェクト設定（⚙️アイコン）を開く
2. 「全般」タブの「マイアプリ」セクションまでスクロール
3. 「ウェブアプリにFirebaseを追加」（</> アイコン）をクリック
4. アプリのニックネームを入力（例: sixtones-quiz-web）
5. 「Firebase Hostingも設定する」はチェック
6. 「アプリを登録」をクリック
7. 表示された設定（`firebaseConfig`）をコピー

## 4. firebase-config.jsの編集

`firebase-config.js`を開いて、手順3で取得した設定に置き換えます：

```javascript
const firebaseConfig = {
  apiKey: "取得したAPI_KEY",
  authDomain: "プロジェクトID.firebaseapp.com",
  projectId: "プロジェクトID",
  storageBucket: "プロジェクトID.appspot.com",
  messagingSenderId: "取得したMESSAGING_SENDER_ID",
  appId: "取得したAPP_ID"
};
```

## 5. Firebase CLIのインストール

```bash
npm install -g firebase-tools
```

## 6. Firebaseにログイン

```bash
firebase login
```

## 7. Firebaseプロジェクトの初期化

```bash
cd sixtones-quiz-firebase
firebase init
```

対話形式で以下を選択：
- `Hosting`を選択
- 既存のプロジェクトを選択
- `public directory`は `.` (ドット) を入力
- `single-page app`は `y`
- 既存ファイルの上書きは `N`
- GitHub連携は `N`

## 8. ローカルでテスト

```bash
firebase serve
```

ブラウザで `http://localhost:5000` にアクセスして動作確認

## 9. 公開

```bash
firebase deploy
```

完了すると、公開URLが表示されます！

## トラブルシューティング

### デプロイ後に変更が反映されない
→ **Ctrl + Shift + R** でスーパーリロード

### エラー: Permission denied
→ Firestoreのセキュリティルールを確認

### ランキングが表示されない
→ firebase-config.jsの設定が正しいか確認

## 次のステップ

1. ✅ ローカルでテスト
2. ✅ Firebase Deploy
3. 📱 SNSで宣伝
4. 📊 Google Analyticsで分析
5. 💰 アクセスが集まったらAdSense申請

頑張ってください！🎉
