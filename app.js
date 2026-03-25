// クイズデータ（SixTONES）
const quizData = [
    // 初級 7問
    {
        question: "SixTONESのメンバーは何人？",
        options: ["4人", "5人", "6人", "7人"],
        correct: 2,
        difficulty: "初級",
        randomizeOptions: false,
        explanation: ""
    },
    {
        question: "SixTONESのデビュー曲は？",
        options: ["Imitation Rain", "NEW ERA", "NAVIGATOR", "マスカラ"],
        correct: 0,
        difficulty: "初級",
        explanation: ""
    },
    {
        question: "SixTONESがデビューした年は？",
        options: ["2018年", "2019年", "2020年", "2021年"],
        correct: 2,
        difficulty: "初級",
        randomizeOptions: false,
        explanation: ""
    },
    {
        question: "SixTONESのグループ名の読み方は？",
        options: ["シックストーンズ", "ストーンズ", "シックストーン", "ストーン"],
        correct: 1,
        difficulty: "初級",
        explanation: ""
    },
    {
        question: "SixTONESの公式YouTubeチャンネル名は？",
        options: ["SixTONES Official", "ストチャン", "SixTONES Channel", "SixTONES TV"],
        correct: 1,
        difficulty: "初級",
        explanation: ""
    },
    {
        question: "SixTONESのメンバーで最年長は？",
        options: ["髙地優吾", "京本大我", "田中樹", "松村北斗"],
        correct: 0,
        difficulty: "初級",
        explanation: ""
    },
    {
        question: "デビュー曲「Imitation Rain」を作曲したのは？",
        options: ["YOSHIKI", "B'z", "久石譲", "小室哲哉"],
        correct: 0,
        difficulty: "初級",
        explanation: ""
    },
    // 中級 8問
    {
        question: "SixTONESの結成年は？",
        options: ["2013年", "2014年", "2015年", "2016年"],
        correct: 2,
        difficulty: "中級",
        randomizeOptions: false,
        explanation: ""
    },
    {
        question: "髙地優吾の誕生日は？",
        options: ["3月8日", "6月8日", "9月8日", "12月8日"],
        correct: 0,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "京本大我の父親の職業は？",
        options: ["歌手", "俳優", "作家", "お笑い芸人"],
        correct: 1,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "松村北斗が主演したドラマ「恋なんて、本気でやってどうするの？」で演じた役名は？",
        options: ["柴田雄大", "柴田大輝", "柴田拓也", "柴田優斗"],
        correct: 0,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "ジェシーの出身地は？",
        options: ["東京都", "神奈川県", "千葉県", "埼玉県"],
        correct: 0,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "森本慎太郎の兄が以前所属していたグループは？",
        options: ["NEWS", "関ジャニ∞", "Hey! Say! JUMP", "Kis-My-Ft2"],
        correct: 2,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "SixTONESのファンの呼び方は？",
        options: ["ストーンズファミリー", "ストファミ", "特に決まっていない", "SixLOVE"],
        correct: 2,
        difficulty: "中級",
        explanation: ""
    },
    // 上級 5問
    {
        question: "SixTONES結成前、髙地優吾が所属していたJr.ユニットは？",
        options: ["B.I.Shadow", "Mis Snow Man", "Love-tune", "すべて"],
        correct: 0,
        difficulty: "上級",
        explanation: ""
    },
    {
        question: "京本大我の舞台デビュー作品は？",
        options: ["エリザベート", "滝沢歌舞伎", "DREAM BOYS", "少年たち"],
        correct: 2,
        difficulty: "上級",
        explanation: ""
    },
    {
        question: "田中樹がラップを始めたきっかけとなったアーティストは？",
        options: ["KREVA", "RIP SLYME", "Dragon Ash", "KICK THE CAN CREW"],
        correct: 0,
        difficulty: "上級",
        explanation: ""
    },
    {
        question: "松村北斗が出演した映画「ライアー×ライアー」の公開年は？",
        options: ["2019年", "2020年", "2021年", "2022年"],
        correct: 2,
        difficulty: "上級",
        randomizeOptions: false,
        explanation: ""
    },
    {
        question: "ジェシーがバラエティ番組でよく披露する特技は？",
        options: ["アクロバット", "マジック", "モノマネ", "すべて"],
        correct: 3,
        difficulty: "上級",
        explanation: ""
    },
    // ========== 新規追加問題 80問 ==========
    // 初級 20問
    {
        question: "髙地優吾のメンバーカラーは？",
        options: ["赤", "黄色", "青", "緑"],
        correct: 1,
        difficulty: "初級",
        explanation: ""
    },
    {
        question: "京本大我のメンバーカラーは？",
        options: ["ピンク", "紫", "青", "白"],
        correct: 0,
        difficulty: "初級",
        explanation: ""
    },
    {
        question: "田中樹のメンバーカラーは？",
        options: ["黒", "赤", "青", "緑"],
        correct: 0,
        difficulty: "初級",
        explanation: ""
    },
    {
        question: "松村北斗のメンバーカラーは？",
        options: ["赤", "青", "黒", "紫"],
        correct: 1,
        difficulty: "初級",
        explanation: ""
    },
    {
        question: "ジェシーのメンバーカラーは？",
        options: ["赤", "青", "黄色", "緑"],
        correct: 0,
        difficulty: "初級",
        explanation: ""
    },
    {
        question: "森本慎太郎のメンバーカラーは？",
        options: ["緑", "黄色", "青", "紫"],
        correct: 0,
        difficulty: "初級",
        explanation: ""
    },
    {
        question: "SixTONESの所属事務所は？",
        options: ["STARTO ENTERTAINMENT", "LDH", "エイベックス", "バーニング"],
        correct: 0,
        difficulty: "初級",
        explanation: ""
    },
    {
        question: "SixTONESのデビュー日は？",
        options: ["2020年1月22日", "2020年2月22日", "2020年3月22日", "2020年4月22日"],
        correct: 0,
        difficulty: "初級",
        randomizeOptions: false,
        explanation: ""
    },
    {
        question: "SixTONESの公式ファンクラブ名は？",
        options: ["SixTONES FC", "ストーンズクラブ", "Island", "特に名称なし"],
        correct: 2,
        difficulty: "初級",
        explanation: ""
    },
    {
        question: "SixTONESが初めて出演した紅白歌合戦は？",
        options: ["2019年", "2020年", "2021年", "2022年"],
        correct: 1,
        difficulty: "初級",
        randomizeOptions: false,
        explanation: ""
    },
    {
        question: "SixTONESのメンバーで最年少は？",
        options: ["森本慎太郎", "ジェシー", "田中樹", "松村北斗"],
        correct: 0,
        difficulty: "初級",
        explanation: ""
    },
    {
        question: "SixTONESの2ndシングルは？",
        options: ["NAVIGATOR", "NEW ERA", "マスカラ", "僕が僕じゃないみたいだ"],
        correct: 0,
        difficulty: "初級",
        explanation: ""
    },
    {
        question: "SixTONESの1stアルバムのタイトルは？",
        options: ["1ST", "SixTONES", "TONE", "STONES"],
        correct: 0,
        difficulty: "初級",
        explanation: ""
    },
    {
        question: "SixTONESのグループ名の由来に含まれないものは？",
        options: ["6つの音色", "6つの原石", "6人の個性", "6つの未来"],
        correct: 3,
        difficulty: "初級",
        explanation: ""
    },
    {
        question: "SixTONESのメンバー全員がジャニーズ事務所に入所したのは何年代？",
        options: ["1990年代", "2000年代", "2010年代", "バラバラ"],
        correct: 1,
        difficulty: "初級",
        randomizeOptions: false,
        explanation: ""
    },
    {
        question: "SixTONESの楽曲「マスカラ」はどのシングルに収録されている？",
        options: ["3rdシングル", "4thシングル", "5thシングル", "6thシングル"],
        correct: 1,
        difficulty: "初級",
        randomizeOptions: false,
        explanation: ""
    },
    {
        question: "SixTONESのYouTubeチャンネル「ストチャン」の特徴は？",
        options: ["バラエティ企画が多い", "音楽のみ", "ダンス動画のみ", "舞台裏のみ"],
        correct: 0,
        difficulty: "初級",
        explanation: ""
    },

    {
        question: "SixTONESの楽曲「僕が僕じゃないみたいだ」のジャンルは？",
        options: ["ロック", "バラード", "ダンス", "ラップ"],
        correct: 1,
        difficulty: "初級",
        explanation: ""
    },

    // 中級 40問
    {
        question: "京本大我の誕生日は？",
        options: ["12月3日", "12月5日", "12月7日", "12月9日"],
        correct: 0,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "田中樹の誕生日は？",
        options: ["6月15日", "6月20日", "6月25日", "6月30日"],
        correct: 0,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "松村北斗の誕生日は？",
        options: ["6月15日", "6月18日", "6月20日", "6月25日"],
        correct: 1,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "ジェシーの誕生日は？",
        options: ["6月10日", "6月11日", "6月12日", "6月13日"],
        correct: 1,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "森本慎太郎の誕生日は？",
        options: ["7月10日", "7月15日", "7月20日", "7月25日"],
        correct: 1,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "髙地優吾の出身地は？",
        options: ["神奈川県", "千葉県", "東京都", "埼玉県"],
        correct: 0,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "京本大我の出身地は？",
        options: ["東京都", "神奈川県", "千葉県", "埼玉県"],
        correct: 0,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "田中樹の出身地は？",
        options: ["千葉県", "神奈川県", "東京都", "埼玉県"],
        correct: 0,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "松村北斗の出身地は？",
        options: ["静岡県", "神奈川県", "千葉県", "東京都"],
        correct: 0,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "森本慎太郎の出身地は？",
        options: ["神奈川県", "東京都", "千葉県", "埼玉県"],
        correct: 0,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "SixTONESの3rdシングルのタイトルは？",
        options: ["NEW ERA", "NAVIGATOR", "マスカラ", "僕が僕じゃないみたいだ"],
        correct: 0,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "SixTONESの2ndアルバムのタイトルは？",
        options: ["CITY", "VOICE", "TONE", "SOUND"],
        correct: 0,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "髙地優吾のジャニーズ事務所入所年は？",
        options: ["2009年", "2010年", "2011年", "2012年"],
        correct: 0,
        difficulty: "中級",
        randomizeOptions: false,
        explanation: ""
    },
    {
        question: "京本大我のジャニーズ事務所入所年は？",
        options: ["2005年", "2006年", "2007年", "2008年"],
        correct: 1,
        difficulty: "中級",
        randomizeOptions: false,
        explanation: ""
    },
    {
        question: "田中樹のジャニーズ事務所入所年は？",
        options: ["2007年", "2008年", "2009年", "2010年"],
        correct: 0,
        difficulty: "中級",
        randomizeOptions: false,
        explanation: ""
    },
    {
        question: "松村北斗のジャニーズ事務所入所年は？",
        options: ["2008年", "2009年", "2010年", "2011年"],
        correct: 1,
        difficulty: "中級",
        randomizeOptions: false,
        explanation: ""
    },
    {
        question: "ジェシーのジャニーズ事務所入所年は？",
        options: ["2006年", "2007年", "2008年", "2009年"],
        correct: 0,
        difficulty: "中級",
        randomizeOptions: false,
        explanation: ""
    },
    {
        question: "森本慎太郎のジャニーズ事務所入所年は？",
        options: ["2004年", "2005年", "2006年", "2007年"],
        correct: 2,
        difficulty: "中級",
        randomizeOptions: false,
        explanation: ""
    },
    {
        question: "SixTONESが出演した初めての主演ドラマは？",
        options: ["私立バカレア高校", "ゆとりですがなにか", "パーフェクトワールド", "特になし"],
        correct: 0,
        difficulty: "中級",
        explanation: ""
    },


    {
        question: "髙地優吾の特技は？",
        options: ["歌", "ダンス", "ボイスパーカッション", "料理"],
        correct: 2,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "京本大我の特技は？",
        options: ["歌", "ギター", "ピアノ", "ドラム"],
        correct: 0,
        difficulty: "中級",
        explanation: ""
    },

    {
        question: "ジェシーの父親の国籍は？",
        options: ["アメリカ", "イギリス", "カナダ", "オーストラリア"],
        correct: 0,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "森本慎太郎の兄の名前は？",
        options: ["森本龍太郎", "森本翔太", "森本光太郎", "森本健太"],
        correct: 0,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "SixTONESの楽曲で最もYouTube再生回数が多いのは？（2024年時点）",
        options: ["Imitation Rain", "NAVIGATOR", "こっから", "NEW ERA"],
        correct: 2,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "SixTONESが初めてアリーナツアーを行ったのは？",
        options: ["2020年", "2021年", "2022年", "2023年"],
        correct: 0,
        difficulty: "中級",
        randomizeOptions: false,
        explanation: ""
    },


    {
        question: "京本大我の父親の名前は？",
        options: ["京本政樹", "京本雅樹", "京本正樹", "京本昌樹"],
        correct: 0,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "田中樹の兄の田中聖が所属していたグループは？",
        options: ["KAT-TUN", "関ジャニ∞", "NEWS", "Kis-My-Ft2"],
        correct: 0,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "髙地優吾がよく担当するパートは？",
        options: ["高音", "低音", "ラップ", "すべて"],
        correct: 0,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "SixTONESのメンバーで身長が最も高いのは？",
        options: ["ジェシー", "松村北斗", "髙地優吾", "森本慎太郎"],
        correct: 0,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "SixTONESの楽曲制作に関わることが多いメンバーは？",
        options: ["京本大我", "田中樹", "松村北斗", "全員"],
        correct: 1,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "SixTONESがデビュー前に出演していた舞台は？",
        options: ["滝沢歌舞伎", "少年たち", "DREAM BOYS", "すべて"],
        correct: 3,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "森本慎太郎がドラマ「パーフェクトワールド」で演じた役柄は？",
        options: ["主人公の友人", "主人公の弟", "主人公のライバル", "医師"],
        correct: 1,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "SixTONESのメンバーが全員出演したバラエティ番組は？",
        options: ["VS魂", "世界の果てまでイッテQ!", "ザ!鉄腕!DASH!!", "すべて"],
        correct: 0,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "京本大我の愛称は？",
        options: ["きょも", "たいが", "きょうちゃん", "すべて"],
        correct: 0,
        difficulty: "中級",
        explanation: ""
    },
    {
        question: "田中樹の愛称は？",
        options: ["じゅり", "たなか", "じゅったん", "すべて"],
        correct: 0,
        difficulty: "中級",
        explanation: ""
    },
    // 上級 20問
    {
        question: "髙地優吾が入所当時、最初に所属したユニットは？",
        options: ["B.I.Shadow", "Love-tune", "Mis Snow Man", "バックダンサーのみ"],
        correct: 0,
        difficulty: "上級",
        explanation: ""
    },
    {
        question: "京本大我が子役として出演したドラマは？",
        options: ["金田一少年の事件簿", "美少年探偵団", "探偵学園Q", "すべて"],
        correct: 0,
        difficulty: "上級",
        explanation: ""
    },
    {
        question: "田中樹が作詞・作曲に関わった初めての楽曲は？",
        options: ["Good Luck!", "Rosy", "Laugh In the LIFE", "特になし"],
        correct: 2,
        difficulty: "上級",
        explanation: ""
    },
    {
        question: "松村北斗が雑誌「anan」で連載していた企画は？",
        options: ["映画レビュー", "小説連載", "インタビュー企画", "写真撮影"],
        correct: 1,
        difficulty: "上級",
        explanation: ""
    },
    {
        question: "ジェシーの以前の芸名は？",
        options: ["ジェシー・ルイス", "ルイス・ジェシー", "ジェシー・マサヒロ", "マサヒロ・ジェシー"],
        correct: 1,
        difficulty: "上級",
        explanation: ""
    },
    {
        question: "森本慎太郎が子役として出演した映画は？",
        options: ["スノープリンス 禁じられた恋のメロディ", "スペーストラベラーズ", "金田一少年の事件簿", "電車男"],
        correct: 0,
        difficulty: "上級",
        explanation: ""
    },
    {
        question: "SixTONESの結成時、最初のメンバー構成で含まれていなかったのは？",
        options: ["全員最初からメンバー", "森本慎太郎", "ジェシー", "髙地優吾"],
        correct: 0,
        difficulty: "上級",
        explanation: ""
    },

    {
        question: "松村北斗がモデルを務めた雑誌は？",
        options: ["anan", "non-no", "ViVi", "すべて"],
        correct: 3,
        difficulty: "上級",
        explanation: ""
    },

    {
        question: "田中樹がベースを弾き始めたきっかけは？",
        options: ["父親の影響", "兄弟の影響", "友人の影響", "自分から"],
        correct: 3,
        difficulty: "上級",
        explanation: ""
    },
    {
        question: "ジェシーの身長は？",
        options: ["180cm", "184cm", "186cm", "188cm"],
        correct: 1,
        difficulty: "上級",
        randomizeOptions: false,
        explanation: ""
    },
    {
        question: "京本大我が影響を受けた歌手は？",
        options: ["マイケル・ジャクソン", "フレディ・マーキュリー", "スティービー・ワンダー", "すべて"],
        correct: 1,
        difficulty: "上級",
        explanation: ""
    },

    {
        question: "髙地優吾の血液型は？",
        options: ["A型", "B型", "O型", "AB型"],
        correct: 0,
        difficulty: "上級",
        explanation: ""
    },
    {
        question: "京本大我の血液型は？",
        options: ["A型", "B型", "O型", "AB型"],
        correct: 1,
        difficulty: "上級",
        explanation: ""
    },
    {
        question: "松村北斗が出演した舞台「滝沢歌舞伎」で演じた役の特徴は？",
        options: ["殺陣", "歌唱", "ダンス", "すべて"],
        correct: 3,
        difficulty: "上級",
        explanation: ""
    },

    {
        question: "田中樹が尊敬するラッパーで、実際に共演したことがあるのは？",
        options: ["KREVA", "ZEEBRA", "AK-69", "すべて"],
        correct: 0,
        difficulty: "上級",
        explanation: ""
    }
];

// 称号システム
const titles = [
    { rate: 99, title: "最髙地優吾", comment: "", emoji: "🏅" },
    { rate: 85, title: "おやーンズ", comment: "", emoji: "❤️‍🔥" },
    { rate: 70, title: "サタスペリスナー", comment: "", emoji: "🎧" },
    { rate: 50, title: "チムスト", comment: "", emoji: "💎" },
    { rate: 0, title: "見習いンズ", comment: "", emoji: "🌱" }
];

// ランク制（累計ポイントで昇格・降格なし）
const rankThresholds = [
    { minPoints: 1500, rankName: '最髙地優吾' },
    { minPoints: 700, rankName: 'おやーンズ' },
    { minPoints: 350, rankName: 'サタスペリスナー' },
    { minPoints: 150, rankName: 'チムスト' },
    { minPoints: 50, rankName: '見習いンズ' },
    { minPoints: 0, rankName: '新規リスナー' }
];

// ランク算出
function getRankForPoints(points) {
    for (const threshold of rankThresholds) {
        if (points >= threshold.minPoints) {
            return threshold.rankName;
        }
    }
    return '新規リスナー';
}

// 難易度別ポイント
function getPointsForDifficulty(difficulty) {
    switch (difficulty) {
        case '初級': return 1;
        case '中級': return 2;
        case '上級': return 3;
        default: return 1;
    }
}

// 絆クイズ設定
const bondQuizConfig = {
    '4級': { questions: 3, passLine: 1, stoneCost: 1, difficulties: ['初級'] },
    '3級': { questions: 5, passLine: 2, stoneCost: 1, difficulties: ['初級', '中級'] },
    '2級': { questions: 7, passLine: 3, stoneCost: 1, difficulties: ['初級', '中級', '上級'] },
    '1級': { questions: 7, passLine: 5, stoneCost: 1, difficulties: ['中級', '上級'] },
    '特級': { questions: 7, passLine: 7, stoneCost: 3, difficulties: ['上級'] }
};

// 絆級の順序（比較用）
const gradeOrder = ['-', '4級', '3級', '2級', '1級', '特級'];

// シーズンID取得（月単位）
function getSeasonId() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
}

// シーズン番号取得（2026年1月を第1シーズンとする）
function getSeasonNumber() {
    const now = new Date();
    return (now.getFullYear() - 2026) * 12 + (now.getMonth() + 1);
}

// シーズン終了日取得
function getSeasonEndDate() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
}

// グローバル変数
let username = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timer = null;
let isAnswered = false;
let quizResults = []; // 各問題の結果を記録
let currentDifficulty = 'ランダム'; // 選択中の難易度
let currentMode = 'free'; // 'free' | 'bond'
let currentGrade = ''; // 絆クイズの級
let userStats = {
    points: 0,
    stones: 0,
    rank: '新規リスナー',
    correctCount: 0,
    totalCount: 0,
    historyLimit: 5,
    loginBonusDate: null,
    title: null,
    seasonPoints: 0,
    grade: '-'
};
let currentTitle = null;
let newTitleAchieved = false;

// 初期化
async function init() {
    try {
        const savedUsername = localStorage.getItem('sixtonesQuizUsername');

        if (savedUsername) {
            username = savedUsername;
            await loadUserStats();
            const gotBonus = await checkLoginBonus();
            showScreen('startScreen');
            updateStartScreen();
            if (gotBonus) {
                showLoginBonusNotice();
            }
        } else {
            showScreen('usernameScreen');
        }
    } catch (error) {
        console.error('初期化エラー:', error);
        showScreen('usernameScreen');
    }
}

// ログインボーナス通知
function showLoginBonusNotice() {
    const notice = document.getElementById('loginBonusNotice');
    if (notice) {
        notice.classList.remove('hidden');
        setTimeout(() => notice.classList.add('hidden'), 3000);
    }
}

// 画面表示の切り替え
function showScreen(screenId) {
    const screens = [
        'loadingScreen', 'usernameScreen', 'startScreen',
        'gameMenuScreen', 'quizScreen', 'resultScreen',
        'bondQuizScreen', 'bondResultScreen',
        'historyScreen', 'historyDetailScreen',
        'profileScreen', 'toolScreen',
        'rankingScreen', 'rankingHistoryScreen', 'oldRankingScreen'
    ];
    screens.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });
    document.getElementById(screenId).classList.remove('hidden');
    window.scrollTo(0, 0);
}

// デフォルトのuserStats
function getDefaultUserStats() {
    return {
        points: 0, stones: 0, rank: '新規リスナー',
        correctCount: 0, totalCount: 0, historyLimit: 5,
        loginBonusDate: null, title: null, seasonPoints: 0, grade: '-'
    };
}

// ユーザー統計の読み込み
async function loadUserStats() {
    try {
        const userDocRef = db.collection('users').doc(username);
        const userDoc = await userDocRef.get();

        if (userDoc.exists) {
            const data = userDoc.data();
            userStats = {
                points: data.points || 0,
                stones: data.stones || 0,
                rank: data.rank || '新規リスナー',
                correctCount: data.correctCount || 0,
                totalCount: data.totalCount || 0,
                historyLimit: data.historyLimit || 5,
                loginBonusDate: data.loginBonusDate || null,
                title: data.title || null,
                seasonPoints: data.seasonPoints || 0,
                grade: data.grade || '-'
            };
            currentTitle = data.title || null;
        } else {
            userStats = getDefaultUserStats();
            currentTitle = null;
        }
    } catch (error) {
        console.error('統計読み込みエラー:', error);
        userStats = getDefaultUserStats();
        currentTitle = null;
    }
}

// ユーザーデータの保存
async function saveUserStats() {
    try {
        const userDocRef = db.collection('users').doc(username);
        await userDocRef.set({
            username: username,
            points: userStats.points,
            stones: userStats.stones,
            rank: userStats.rank,
            correctCount: userStats.correctCount,
            totalCount: userStats.totalCount,
            historyLimit: userStats.historyLimit,
            loginBonusDate: userStats.loginBonusDate,
            title: userStats.title,
            seasonPoints: userStats.seasonPoints,
            grade: userStats.grade,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    } catch (error) {
        console.error('ユーザーデータ保存エラー:', error);
    }
}

// クイズ履歴の保存
async function saveHistory(questionData, userAnswer, isCorrect, earnedPoints, mode, grade) {
    try {
        const historyRef = db.collection('history').doc(username)
            .collection('items');
        await historyRef.add({
            question: questionData.question,
            options: questionData.options,
            correct: questionData.correct,
            userAnswer: userAnswer,
            isCorrect: isCorrect,
            points: earnedPoints,
            difficulty: questionData.difficulty,
            explanation: questionData.explanation || '',
            mode: mode || 'free',
            grade: grade || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
    } catch (error) {
        console.error('履歴保存エラー:', error);
    }
}

// 履歴の読み込み
async function loadHistory() {
    try {
        const historyRef = db.collection('history').doc(username)
            .collection('items');
        const snapshot = await historyRef
            .orderBy('timestamp', 'desc')
            .limit(userStats.historyLimit)
            .get();
        const items = [];
        snapshot.forEach(doc => {
            items.push({ id: doc.id, ...doc.data() });
        });
        return items;
    } catch (error) {
        console.error('履歴読み込みエラー:', error);
        return [];
    }
}

// ログインボーナスチェック
async function checkLoginBonus() {
    const today = new Date().toISOString().split('T')[0];
    if (userStats.loginBonusDate !== today) {
        userStats.stones += 1;
        userStats.loginBonusDate = today;
        await saveUserStats();
        return true;
    }
    return false;
}

// 称号の取得
function getTitleForRate(rate) {
    for (let i = 0; i < titles.length; i++) {
        if (rate >= titles[i].rate) {
            return titles[i];
        }
    }
    return titles[titles.length - 1];
}

// 効果音生成
function playSound(type) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    if (type === 'correct') {
        oscillator.frequency.value = 880;
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
        
        const oscillator2 = audioContext.createOscillator();
        const gainNode2 = audioContext.createGain();
        oscillator2.connect(gainNode2);
        gainNode2.connect(audioContext.destination);
        
        oscillator2.frequency.value = 1046;
        gainNode2.gain.setValueAtTime(0.3, audioContext.currentTime + 0.1);
        gainNode2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
        
        oscillator2.start(audioContext.currentTime + 0.1);
        oscillator2.stop(audioContext.currentTime + 0.4);
    } else if (type === 'wrong') {
        oscillator.frequency.value = 200;
        oscillator.type = 'sawtooth';
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    }
}

// 〇×演出の表示
function showAnswerEffect(isCorrect) {
    const effect = document.createElement('div');
    effect.className = isCorrect ? 'answer-effect-correct' : 'answer-effect-wrong';
    effect.textContent = isCorrect ? '⭕' : '❌';
    document.body.appendChild(effect);
    
    setTimeout(() => {
        effect.remove();
    }, 1000);
}

// スタート画面の更新
function updateStartScreen() {
    document.getElementById('usernameDisplay').textContent = username;

    // ランク・ポイント・ストーン表示
    const rankDisplay = document.getElementById('rankDisplay');
    if (rankDisplay) rankDisplay.textContent = userStats.rank;
    const pointsDisplay = document.getElementById('pointsDisplay');
    if (pointsDisplay) pointsDisplay.textContent = userStats.points + 'P';
    const stonesDisplay = document.getElementById('stonesDisplay');
    if (stonesDisplay) stonesDisplay.textContent = '💎 ' + userStats.stones;

    // 称号の表示
    const titleDisplay = document.getElementById('titleDisplay');
    const displayTitle = currentTitle || getTitleForRate(0);

    if (displayTitle) {
        let titleHTML = `
            <div class="title-label">＜称号＞</div>
            <div class="title-badge">
                <span class="title-emoji">${displayTitle.emoji}</span>
                <span class="title-name">${displayTitle.title}</span>
            </div>
        `;
        if (displayTitle.comment) {
            titleHTML += `<div class="title-comment">${displayTitle.comment}</div>`;
        }
        titleDisplay.innerHTML = titleHTML;
        titleDisplay.classList.remove('hidden');
    } else {
        titleDisplay.classList.add('hidden');
    }
}

// ユーザー名設定
document.getElementById('setUsernameBtn').addEventListener('click', async () => {
    const input = document.getElementById('usernameInput').value.trim();
    if (!input) {
        alert('ユーザー名を入力してください');
        return;
    }

    username = input;
    localStorage.setItem('sixtonesQuizUsername', username);
    await loadUserStats();
    const gotBonus = await checkLoginBonus();
    showScreen('startScreen');
    updateStartScreen();
    if (gotBonus) showLoginBonusNotice();
});

document.getElementById('usernameInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('setUsernameBtn').click();
    }
});

// ユーザー名変更
document.getElementById('changeUsernameBtn').addEventListener('click', () => {
    document.getElementById('usernameEditInput').value = username;
    document.getElementById('changeUsernameBtn').classList.add('hidden');
    document.getElementById('usernameEditArea').classList.remove('hidden');
});

document.getElementById('saveUsernameBtn').addEventListener('click', async () => {
    const newUsername = document.getElementById('usernameEditInput').value.trim();
    if (!newUsername) {
        alert('ユーザー名を入力してください');
        return;
    }

    username = newUsername;
    localStorage.setItem('sixtonesQuizUsername', username);
    await loadUserStats();
    updateStartScreen();

    document.getElementById('changeUsernameBtn').classList.remove('hidden');
    document.getElementById('usernameEditArea').classList.add('hidden');
});

document.getElementById('cancelUsernameBtn').addEventListener('click', () => {
    document.getElementById('changeUsernameBtn').classList.remove('hidden');
    document.getElementById('usernameEditArea').classList.add('hidden');
});

// ===== ホーム画面ボタン =====
document.getElementById('startQuizBtn').addEventListener('click', () => {
    showScreen('gameMenuScreen');
});

document.getElementById('viewRankingBtn').addEventListener('click', async () => {
    showScreen('rankingScreen');
    await loadAndShowStandaloneRanking();
});

document.getElementById('viewHistoryBtn').addEventListener('click', async () => {
    showScreen('historyScreen');
    await showHistoryScreen();
});

document.getElementById('viewProfileBtn').addEventListener('click', () => {
    showScreen('profileScreen');
    updateProfileScreen();
});

document.getElementById('viewToolBtn').addEventListener('click', () => {
    showScreen('toolScreen');
    updateToolScreen();
});

// ===== ゲームメニュー画面 =====
document.getElementById('backFromGameMenu').addEventListener('click', () => {
    showScreen('startScreen');
});

// フリープレイ難易度ボタン
['beginnerBtn', 'intermediateBtn', 'advancedBtn', 'randomBtn'].forEach(btnId => {
    document.getElementById(btnId).addEventListener('click', () => {
        const diffMap = {
            'beginnerBtn': '初級',
            'intermediateBtn': '中級',
            'advancedBtn': '上級',
            'randomBtn': 'ランダム'
        };
        startFreePlay(diffMap[btnId]);
    });
});

// 絆クイズボタン
document.getElementById('bondQuizBtn').addEventListener('click', () => {
    showScreen('bondQuizScreen');
    updateBondQuizScreen();
});

// ===== フリープレイ =====
function startFreePlay(difficulty) {
    currentMode = 'free';
    currentDifficulty = difficulty;
    currentGrade = '';
    quizResults = [];

    let filtered;
    if (difficulty === 'ランダム') {
        filtered = [...quizData];
    } else {
        filtered = quizData.filter(q => q.difficulty === difficulty);
    }

    const shuffled = filtered.sort(() => Math.random() - 0.5);
    currentQuestions = shuffled.slice(0, 10);
    currentQuestionIndex = 0;
    score = 0;

    showScreen('quizScreen');
    // フリープレイはタイマーなし
    const timerEl = document.getElementById('timer');
    if (timerEl) timerEl.classList.add('hidden');
    showQuestion();
}

// 問題表示
function showQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        finishQuiz();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    const totalQ = currentQuestions.length;

    document.getElementById('questionCounter').textContent =
        `問題 ${currentQuestionIndex + 1}/${totalQ}`;
    document.getElementById('scoreDisplay').textContent = `正解: ${score}`;
    document.getElementById('questionText').textContent = question.question;

    // 解説ボタンを非表示にリセット
    const explanationBtn = document.getElementById('explanationBtn');
    if (explanationBtn) {
        explanationBtn.classList.add('hidden');
        explanationBtn.onclick = null;
    }

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    const shouldRandomize = question.randomizeOptions !== false;

    let shuffledOptions;
    if (shouldRandomize) {
        shuffledOptions = question.options.map((option, index) => ({
            text: option,
            originalIndex: index
        })).sort(() => Math.random() - 0.5);
    } else {
        shuffledOptions = question.options.map((option, index) => ({
            text: option,
            originalIndex: index
        }));
    }

    const correctDisplayIndex = shuffledOptions.findIndex(opt => opt.originalIndex === question.correct);

    shuffledOptions.forEach((option, displayIndex) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option.text;
        optionDiv.addEventListener('click', () => selectAnswer(option.originalIndex, displayIndex, correctDisplayIndex));
        optionsContainer.appendChild(optionDiv);
    });

    isAnswered = false;

    // 絆クイズのみタイマー
    if (currentMode === 'bond') {
        startTimer();
    }
}

// タイマー開始（絆クイズ専用）
function startTimer() {
    timeLeft = 15;
    const timerEl = document.getElementById('timer');
    timerEl.classList.remove('hidden');
    timerEl.textContent = timeLeft;
    timerEl.classList.remove('warning');

    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;

        if (timeLeft <= 3) {
            timerEl.classList.add('warning');
        }

        if (timeLeft <= 0) {
            clearInterval(timer);
            const question = currentQuestions[currentQuestionIndex];
            const options = document.querySelectorAll('.option');
            let correctDisplayIndex = -1;

            options.forEach((option, index) => {
                if (option.textContent === question.options[question.correct]) {
                    correctDisplayIndex = index;
                }
            });

            selectAnswer(-1, -1, correctDisplayIndex);
        }
    }, 1000);
}

// 回答選択
function selectAnswer(originalIndex, displayIndex, correctDisplayIndex) {
    if (isAnswered) return;

    isAnswered = true;
    clearInterval(timer);

    const question = currentQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');

    options.forEach(option => option.classList.add('disabled'));

    const isCorrect = originalIndex === question.correct;

    // 結果を記録
    quizResults.push({
        question: question,
        userAnswer: originalIndex,
        isCorrect: isCorrect
    });

    if (isCorrect) {
        if (displayIndex >= 0) {
            options[displayIndex].classList.add('correct');
        }
        score++;
        document.getElementById('scoreDisplay').textContent = `正解: ${score}`;

        playSound('correct');
        showAnswerEffect(true);
    } else {
        if (displayIndex >= 0) {
            options[displayIndex].classList.add('wrong');
        }
        options[correctDisplayIndex].classList.add('correct');

        playSound('wrong');
        showAnswerEffect(false);
    }

    // 回答後に解説ボタン表示（explanationが空でない場合）
    const explanationBtn = document.getElementById('explanationBtn');
    if (explanationBtn && question.explanation) {
        explanationBtn.classList.remove('hidden');
        explanationBtn.onclick = () => showExplanationModal(question.explanation);
    }

    // フリープレイは手動で次へ（解説を読む時間を確保）
    if (currentMode === 'free') {
        const nextBtn = document.getElementById('nextQuestionBtn');
        if (nextBtn) {
            nextBtn.classList.remove('hidden');
            nextBtn.onclick = () => {
                nextBtn.classList.add('hidden');
                if (explanationBtn) explanationBtn.classList.add('hidden');
                currentQuestionIndex++;
                if (currentQuestionIndex >= currentQuestions.length) {
                    finishQuiz();
                } else {
                    showQuestion();
                }
            };
        }
    } else {
        // 絆クイズは自動で次へ
        setTimeout(() => {
            if (explanationBtn) explanationBtn.classList.add('hidden');
            currentQuestionIndex++;
            if (currentQuestionIndex >= currentQuestions.length) {
                finishBondQuiz();
            } else {
                showQuestion();
            }
        }, 1500);
    }
}

// 解説モーダル表示
function showExplanationModal(text) {
    const modal = document.getElementById('explanationModal');
    const modalText = document.getElementById('explanationText');
    if (modal && modalText) {
        modalText.textContent = text;
        modal.classList.remove('hidden');
    }
}

// 解説モーダル閉じる
document.getElementById('closeExplanationBtn')?.addEventListener('click', () => {
    document.getElementById('explanationModal').classList.add('hidden');
});

// ===== フリープレイ終了 =====
async function finishQuiz() {
    showScreen('resultScreen');

    // 難易度別ポイント計算
    let earnedPoints = 0;
    quizResults.forEach(result => {
        if (result.isCorrect) {
            earnedPoints += getPointsForDifficulty(result.question.difficulty);
        }
    });

    userStats.points += earnedPoints;
    userStats.seasonPoints += earnedPoints;
    userStats.correctCount += score;
    userStats.totalCount += currentQuestions.length;
    userStats.rank = getRankForPoints(userStats.points);

    // 称号判定
    const overallRate = userStats.totalCount > 0
        ? (userStats.correctCount / userStats.totalCount) * 100 : 0;
    const newTitle = getTitleForRate(overallRate);
    const oldTitleRate = currentTitle ? currentTitle.rate : -1;
    newTitleAchieved = newTitle.rate > oldTitleRate;

    if (newTitleAchieved || !currentTitle) {
        currentTitle = newTitle;
        userStats.title = currentTitle;
    }

    // 結果画面表示
    showResultScreenWithCurrentData(earnedPoints);
    updateResultScreenWithTitle();

    try {
        await saveUserStats();

        // 履歴保存
        for (const result of quizResults) {
            const pts = result.isCorrect ? getPointsForDifficulty(result.question.difficulty) : 0;
            await saveHistory(result.question, result.userAnswer, result.isCorrect, pts, 'free', '');
        }

        await updateRanking();
        await loadAndShowRanking();
    } catch (error) {
        console.error('クイズ終了処理エラー:', error);
    }
}

// 結果画面を現在のデータで表示
function showResultScreenWithCurrentData(earnedPoints) {
    const totalQ = currentQuestions.length;
    document.getElementById('resultScore').textContent = `${score} / ${totalQ}`;

    let emoji, message;
    const rate = score / totalQ;
    if (rate === 1) {
        emoji = '🏆';
        message = '完璧！SixTONESマスターだね！';
    } else if (rate >= 0.8) {
        emoji = '🎉';
        message = 'すごい！SixTONES通だね！';
    } else if (rate >= 0.6) {
        emoji = '😊';
        message = 'いい感じ！もう少し！';
    } else if (rate >= 0.4) {
        emoji = '🤔';
        message = 'まあまあかな。もっと知ろう！';
    } else {
        emoji = '😅';
        message = 'もっとSixTONESのこと知ってね！';
    }

    document.getElementById('resultEmoji').textContent = emoji;
    document.getElementById('resultMessage').textContent = message;

    const resultPoints = document.getElementById('resultPoints');
    if (resultPoints) resultPoints.textContent = `+${earnedPoints || 0}P (合計: ${userStats.points}P)`;

    document.getElementById('titleAchievement').classList.add('hidden');
}

// 称号達成表示を更新
function updateResultScreenWithTitle() {
    const titleAchievement = document.getElementById('titleAchievement');
    if (newTitleAchieved && currentTitle) {
        let achievementHTML = `
            <div class="achievement-banner">
                <div class="achievement-text">🎊 新しい称号を獲得！ 🎊</div>
                <div class="title-badge-large">
                    <span class="title-emoji-large">${currentTitle.emoji}</span>
                    <span class="title-name-large">${currentTitle.title}</span>
                </div>
        `;
        if (currentTitle.comment) {
            achievementHTML += `<div class="title-comment-large">${currentTitle.comment}</div>`;
        }
        achievementHTML += `</div>`;
        titleAchievement.innerHTML = achievementHTML;
        titleAchievement.classList.remove('hidden');
    }
}

// ===== 絆クイズ =====
function updateBondQuizScreen() {
    const grades = ['4級', '3級', '2級', '1級', '特級'];
    grades.forEach(grade => {
        const btn = document.getElementById(`bond${grade}Btn`);
        if (!btn) return;
        const config = bondQuizConfig[grade];
        const hasStones = userStats.stones >= config.stoneCost;

        btn.disabled = !hasStones;
        btn.classList.toggle('disabled-btn', !hasStones);

        const costLabel = btn.querySelector('.stone-cost');
        if (costLabel) costLabel.textContent = `💎${config.stoneCost}`;
    });

    const stoneInfo = document.getElementById('bondStoneInfo');
    if (stoneInfo) stoneInfo.textContent = `所持ストーン: 💎${userStats.stones}`;
}

function startBondQuiz(grade) {
    const config = bondQuizConfig[grade];
    if (userStats.stones < config.stoneCost) {
        alert('ストーンが不足しています');
        return;
    }

    // ストーン消費
    userStats.stones -= config.stoneCost;
    currentMode = 'bond';
    currentGrade = grade;
    quizResults = [];

    // 難易度でフィルタリング
    let filtered = quizData.filter(q => config.difficulties.includes(q.difficulty));
    const shuffled = filtered.sort(() => Math.random() - 0.5);
    currentQuestions = shuffled.slice(0, config.questions);
    currentQuestionIndex = 0;
    score = 0;

    showScreen('quizScreen');
    const timerEl = document.getElementById('timer');
    if (timerEl) timerEl.classList.remove('hidden');
    showQuestion();
}

// 絆クイズ級ボタンのイベント
['4級', '3級', '2級', '1級', '特級'].forEach(grade => {
    const btn = document.getElementById(`bond${grade}Btn`);
    if (btn) btn.addEventListener('click', () => startBondQuiz(grade));
});

document.getElementById('backFromBondQuiz')?.addEventListener('click', () => {
    showScreen('gameMenuScreen');
});

// 絆クイズ終了
async function finishBondQuiz() {
    const config = bondQuizConfig[currentGrade];
    const passed = score >= config.passLine;

    // 絆クイズではポイントは獲得しない（仕様上記載なし）
    // 正解数・回答数は加算
    userStats.correctCount += score;
    userStats.totalCount += currentQuestions.length;

    // 合格時に最高級を更新
    if (passed) {
        const currentGradeIndex = gradeOrder.indexOf(userStats.grade);
        const newGradeIndex = gradeOrder.indexOf(currentGrade);
        if (newGradeIndex > currentGradeIndex) {
            userStats.grade = currentGrade;
        }
    }

    showScreen('bondResultScreen');
    document.getElementById('bondResultGrade').textContent = currentGrade;
    document.getElementById('bondResultScore').textContent = `${score} / ${config.questions}`;
    document.getElementById('bondResultPassLine').textContent = `合格ライン: ${config.passLine}問正解`;

    if (passed) {
        document.getElementById('bondResultStatus').textContent = '🎊 合格！ 🎊';
        document.getElementById('bondResultStatus').className = 'bond-result-pass';
        document.getElementById('bondShareBtn').classList.remove('hidden');
    } else {
        document.getElementById('bondResultStatus').textContent = '不合格...';
        document.getElementById('bondResultStatus').className = 'bond-result-fail';
        document.getElementById('bondShareBtn').classList.add('hidden');
    }

    try {
        await saveUserStats();

        for (const result of quizResults) {
            await saveHistory(result.question, result.userAnswer, result.isCorrect, 0, 'bond', currentGrade);
        }

        await updateRanking();
    } catch (error) {
        console.error('絆クイズ終了処理エラー:', error);
    }
}

document.getElementById('bondBackToMenuBtn')?.addEventListener('click', () => {
    showScreen('startScreen');
    updateStartScreen();
});

// ===== 履歴画面 =====
async function showHistoryScreen() {
    const items = await loadHistory();
    const list = document.getElementById('historyList');
    list.innerHTML = '';

    if (items.length === 0) {
        list.innerHTML = '<li class="no-data">履歴がありません</li>';
        return;
    }

    items.forEach(item => {
        const li = document.createElement('li');
        li.className = 'history-item';
        li.innerHTML = `
            <div class="history-question">${item.question}</div>
            <div class="history-meta">
                <span class="${item.isCorrect ? 'correct-mark' : 'wrong-mark'}">${item.isCorrect ? '⭕' : '❌'}</span>
                <span>${item.difficulty}</span>
                <span>${item.points}P</span>
                ${item.mode === 'bond' ? `<span class="bond-badge">${item.grade}</span>` : ''}
            </div>
        `;
        li.addEventListener('click', () => showHistoryDetail(item));
        list.appendChild(li);
    });
}

function showHistoryDetail(item) {
    showScreen('historyDetailScreen');
    document.getElementById('historyDetailQuestion').textContent = item.question;

    const optionsList = document.getElementById('historyDetailOptions');
    optionsList.innerHTML = '';
    if (item.options) {
        item.options.forEach((opt, i) => {
            const li = document.createElement('li');
            li.textContent = opt;
            if (i === item.correct) li.classList.add('correct-option');
            if (i === item.userAnswer && !item.isCorrect) li.classList.add('wrong-option');
            optionsList.appendChild(li);
        });
    }

    document.getElementById('historyDetailResult').textContent = item.isCorrect ? '正解' : '不正解';
    document.getElementById('historyDetailResult').className = item.isCorrect ? 'correct-mark' : 'wrong-mark';
    document.getElementById('historyDetailPoints').textContent = `${item.points}P`;
    document.getElementById('historyDetailDifficulty').textContent = item.difficulty;
    document.getElementById('historyDetailMode').textContent = item.mode === 'bond' ? `絆クイズ（${item.grade}）` : 'フリープレイ';

    const explanationArea = document.getElementById('historyDetailExplanation');
    if (item.explanation) {
        explanationArea.textContent = item.explanation;
        explanationArea.classList.remove('hidden');
    } else {
        explanationArea.classList.add('hidden');
    }

    const ts = item.timestamp?.toDate ? item.timestamp.toDate() : new Date();
    document.getElementById('historyDetailDate').textContent = ts.toLocaleString('ja-JP');
}

document.getElementById('backFromHistory')?.addEventListener('click', () => {
    showScreen('startScreen');
});

document.getElementById('backFromHistoryDetail')?.addEventListener('click', () => {
    showScreen('historyScreen');
});

// ===== プロフィール画面 =====
function updateProfileScreen() {
    document.getElementById('profileUsername').textContent = username;
    document.getElementById('profileRank').textContent = userStats.rank;
    document.getElementById('profilePoints').textContent = userStats.points + 'P';
    document.getElementById('profileSeasonPoints').textContent = userStats.seasonPoints + 'P';
    const rate = userStats.totalCount > 0
        ? ((userStats.correctCount / userStats.totalCount) * 100).toFixed(1) : '0.0';
    document.getElementById('profileCorrectRate').textContent = rate + '%';
    document.getElementById('profileGrade').textContent = userStats.grade;
    document.getElementById('profileStones').textContent = '💎 ' + userStats.stones;
}

document.getElementById('backFromProfile')?.addEventListener('click', () => {
    showScreen('startScreen');
});

// ===== ツール画面 =====
function updateToolScreen() {
    const currentLimit = document.getElementById('toolCurrentLimit');
    if (currentLimit) currentLimit.textContent = `現在の履歴表示件数: ${userStats.historyLimit}件`;

    const expandBtn = document.getElementById('expandHistoryBtn');
    if (expandBtn) {
        const canExpand = userStats.stones >= 5 && userStats.historyLimit < 100;
        expandBtn.disabled = !canExpand;
        expandBtn.classList.toggle('disabled-btn', !canExpand);

        if (userStats.historyLimit >= 100) {
            expandBtn.textContent = '上限に達しています';
        } else if (userStats.stones < 5) {
            expandBtn.textContent = '💎5個 → +5件（ストーン不足）';
        } else {
            expandBtn.textContent = '💎5個 → +5件 拡張する';
        }
    }

    const toolStoneInfo = document.getElementById('toolStoneInfo');
    if (toolStoneInfo) toolStoneInfo.textContent = `所持ストーン: 💎${userStats.stones}`;
}

document.getElementById('expandHistoryBtn')?.addEventListener('click', async () => {
    if (userStats.stones < 5 || userStats.historyLimit >= 100) return;

    userStats.stones -= 5;
    userStats.historyLimit = Math.min(userStats.historyLimit + 5, 100);
    await saveUserStats();
    updateToolScreen();
});

document.getElementById('backFromTool')?.addEventListener('click', () => {
    showScreen('startScreen');
});

// ===== ランキング画面 =====
document.getElementById('backFromRanking')?.addEventListener('click', () => {
    showScreen('startScreen');
});

document.getElementById('viewRankingHistory')?.addEventListener('click', async () => {
    showScreen('rankingHistoryScreen');
    await loadRankingHistory();
});

document.getElementById('backFromRankingHistory')?.addEventListener('click', () => {
    showScreen('rankingScreen');
});

document.getElementById('backFromOldRanking')?.addEventListener('click', () => {
    showScreen('rankingHistoryScreen');
});

// ===== SNSシェア（X） =====
function shareToX(text) {
    const url = encodeURIComponent(window.location.href);
    const encodedText = encodeURIComponent(text);
    window.open(`https://twitter.com/intent/tweet?text=${encodedText}&url=${url}`, '_blank');
}

// 絆クイズ合格時のシェア
document.getElementById('bondShareBtn')?.addEventListener('click', () => {
    const text = `SixTONESクイズで【${currentGrade}】に合格しました！💎\n正解率: ${score}/${bondQuizConfig[currentGrade].questions}問\n#SixTONESクイズ #SixTONES`;
    shareToX(text);
});

// プロフィール画面のシェア
document.getElementById('profileShareBtn')?.addEventListener('click', () => {
    const text = `SixTONESクイズ 今シーズンの成績📊\nランク: ${userStats.rank}\nポイント: ${userStats.seasonPoints}P\n最高絆級: ${userStats.grade}\n#SixTONESクイズ #SixTONES`;
    shareToX(text);
});

// ランキング更新（月次シーズン制・seasonPointsで順位付け）
async function updateRanking() {
    try {
        const seasonId = getSeasonId();
        const rankingDocRef = db.collection('rankings').doc(seasonId);

        const rankingDoc = await rankingDocRef.get();
        let rankings = [];

        if (rankingDoc.exists) {
            rankings = rankingDoc.data().data || [];
        }

        const existingIndex = rankings.findIndex(r => r.username === username);
        const userData = {
            username: username,
            points: userStats.seasonPoints,
            rank: userStats.rank,
            grade: userStats.grade
        };

        if (existingIndex >= 0) {
            rankings[existingIndex] = userData;
        } else {
            rankings.push(userData);
        }

        rankings.sort((a, b) => b.points - a.points);
        rankings = rankings.slice(0, 50);

        await rankingDocRef.set({
            seasonNumber: getSeasonNumber(),
            seasonId: seasonId,
            endsAt: getSeasonEndDate().toISOString(),
            data: rankings,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    } catch (error) {
        console.error('ランキング更新エラー:', error);
    }
}

// ランキングHTML生成（共通）
function renderRankingItems(rankings, listEl, noDataEl, limit) {
    const items = rankings.slice(0, limit || 50);
    if (items.length > 0) {
        listEl.innerHTML = '';
        noDataEl.classList.add('hidden');

        items.forEach((entry, index) => {
            const li = document.createElement('li');
            li.className = 'ranking-item';

            if (index === 0) li.classList.add('first');
            else if (index === 1) li.classList.add('second');
            else if (index === 2) li.classList.add('third');

            if (entry.username === username) {
                li.classList.add('current');
            }

            li.innerHTML = `
                <div>
                    <span class="rank-number">${index + 1}位</span>
                    <span class="rank-username">
                        ${entry.username}${entry.username === username ? ' (あなた)' : ''}
                    </span>
                </div>
                <div>
                    <span class="rank-rank">${entry.rank || ''}</span>
                    <span class="rank-points">${entry.points}P</span>
                    ${entry.grade && entry.grade !== '-' ? `<span class="rank-grade">${entry.grade}</span>` : ''}
                </div>
            `;

            listEl.appendChild(li);
        });
    } else {
        listEl.innerHTML = '';
        noDataEl.classList.remove('hidden');
    }
}

// ランキング読み込みと表示（結果画面用）
async function loadAndShowRanking() {
    try {
        const seasonId = getSeasonId();
        const rankingDocRef = db.collection('rankings').doc(seasonId);
        const rankingDoc = await rankingDocRef.get();

        const rankingList = document.getElementById('rankingList');
        const noRanking = document.getElementById('noRanking');

        if (rankingDoc.exists) {
            renderRankingItems(rankingDoc.data().data || [], rankingList, noRanking, 10);
        } else {
            rankingList.innerHTML = '';
            noRanking.classList.remove('hidden');
        }
    } catch (error) {
        console.error('ランキング読み込みエラー:', error);
        document.getElementById('noRanking').classList.remove('hidden');
    }
}

// ランキング画面表示（上位50位）
async function loadAndShowStandaloneRanking() {
    try {
        const seasonId = getSeasonId();
        const seasonNum = getSeasonNumber();
        const rankingDocRef = db.collection('rankings').doc(seasonId);
        const rankingDoc = await rankingDocRef.get();

        const rankingList = document.getElementById('rankingListStandalone');
        const noRanking = document.getElementById('noRankingStandalone');
        const seasonTitle = document.getElementById('rankingSeasonTitle');
        if (seasonTitle) seasonTitle.textContent = `第${seasonNum}シーズン`;

        if (rankingDoc.exists) {
            renderRankingItems(rankingDoc.data().data || [], rankingList, noRanking, 50);
        } else {
            rankingList.innerHTML = '';
            noRanking.classList.remove('hidden');
        }
    } catch (error) {
        console.error('ランキング読み込みエラー:', error);
        document.getElementById('noRankingStandalone').classList.remove('hidden');
    }
}

// 過去シーズン一覧の読み込み
async function loadRankingHistory() {
    try {
        const currentSeasonId = getSeasonId();
        const rankingsRef = db.collection('rankings');
        const snapshot = await rankingsRef
            .orderBy('seasonNumber', 'desc')
            .limit(12)
            .get();

        const list = document.getElementById('rankingHistoryList');
        list.innerHTML = '';

        snapshot.forEach(doc => {
            if (doc.id === currentSeasonId) return; // 現シーズンはスキップ
            const data = doc.data();
            const li = document.createElement('li');
            li.className = 'ranking-history-item';
            li.textContent = `第${data.seasonNumber}シーズン（${doc.id}）`;
            li.addEventListener('click', () => showOldRanking(doc.id, data));
            list.appendChild(li);
        });

        if (list.children.length === 0) {
            list.innerHTML = '<li class="no-data">過去のシーズンデータはまだありません</li>';
        }
    } catch (error) {
        console.error('過去ランキング読み込みエラー:', error);
    }
}

// 過去ランキング表示
function showOldRanking(seasonId, data) {
    showScreen('oldRankingScreen');
    document.getElementById('oldRankingTitle').textContent =
        `第${data.seasonNumber}シーズン（${seasonId}）`;

    const list = document.getElementById('oldRankingList');
    const noData = document.getElementById('noOldRanking');
    renderRankingItems((data.data || []).slice(0, 20), list, noData, 20);
}

// もう一回やるボタン
document.getElementById('restartBtn').addEventListener('click', () => {
    showScreen('startScreen');
    updateStartScreen();
});

// アプリ初期化
init();
