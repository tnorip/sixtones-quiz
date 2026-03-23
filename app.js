// クイズデータ（SixTONES）
const quizData = [
    // 初級 7問
    {
        question: "SixTONESのメンバーは何人？",
        options: ["4人", "5人", "6人", "7人"],
        correct: 2,
        difficulty: "初級",
        randomizeOptions: false
    },
    {
        question: "SixTONESのデビュー曲は？",
        options: ["Imitation Rain", "NEW ERA", "NAVIGATOR", "マスカラ"],
        correct: 0,
        difficulty: "初級"
    },
    {
        question: "SixTONESがデビューした年は？",
        options: ["2018年", "2019年", "2020年", "2021年"],
        correct: 2,
        difficulty: "初級",
        randomizeOptions: false
    },
    {
        question: "SixTONESのグループ名の読み方は？",
        options: ["シックストーンズ", "ストーンズ", "シックストーン", "ストーン"],
        correct: 1,
        difficulty: "初級"
    },
    {
        question: "SixTONESの公式YouTubeチャンネル名は？",
        options: ["SixTONES Official", "ストチャン", "SixTONES Channel", "SixTONES TV"],
        correct: 1,
        difficulty: "初級"
    },
    {
        question: "SixTONESのメンバーで最年長は？",
        options: ["髙地優吾", "京本大我", "田中樹", "松村北斗"],
        correct: 0,
        difficulty: "初級"
    },
    {
        question: "デビュー曲「Imitation Rain」を作曲したのは？",
        options: ["YOSHIKI", "B'z", "久石譲", "小室哲哉"],
        correct: 0,
        difficulty: "初級"
    },
    // 中級 8問
    {
        question: "SixTONESの結成年は？",
        options: ["2013年", "2014年", "2015年", "2016年"],
        correct: 2,
        difficulty: "中級",
        randomizeOptions: false
    },
    {
        question: "髙地優吾の誕生日は？",
        options: ["3月8日", "6月8日", "9月8日", "12月8日"],
        correct: 0,
        difficulty: "中級"
    },
    {
        question: "京本大我の父親の職業は？",
        options: ["歌手", "俳優", "作家", "お笑い芸人"],
        correct: 1,
        difficulty: "中級"
    },
    {
        question: "松村北斗が主演したドラマ「恋なんて、本気でやってどうするの？」で演じた役名は？",
        options: ["柴田雄大", "柴田大輝", "柴田拓也", "柴田優斗"],
        correct: 0,
        difficulty: "中級"
    },
    {
        question: "ジェシーの出身地は？",
        options: ["東京都", "神奈川県", "千葉県", "埼玉県"],
        correct: 0,
        difficulty: "中級"
    },
    {
        question: "森本慎太郎の兄が以前所属していたグループは？",
        options: ["NEWS", "関ジャニ∞", "Hey! Say! JUMP", "Kis-My-Ft2"],
        correct: 2,
        difficulty: "中級"
    },
    {
        question: "SixTONESのファンの呼び方は？",
        options: ["ストーンズファミリー", "ストファミ", "特に決まっていない", "SixLOVE"],
        correct: 2,
        difficulty: "中級"
    },
    // 上級 5問
    {
        question: "SixTONES結成前、髙地優吾が所属していたJr.ユニットは？",
        options: ["B.I.Shadow", "Mis Snow Man", "Love-tune", "すべて"],
        correct: 0,
        difficulty: "上級"
    },
    {
        question: "京本大我の舞台デビュー作品は？",
        options: ["エリザベート", "滝沢歌舞伎", "DREAM BOYS", "少年たち"],
        correct: 2,
        difficulty: "上級"
    },
    {
        question: "田中樹がラップを始めたきっかけとなったアーティストは？",
        options: ["KREVA", "RIP SLYME", "Dragon Ash", "KICK THE CAN CREW"],
        correct: 0,
        difficulty: "上級"
    },
    {
        question: "松村北斗が出演した映画「ライアー×ライアー」の公開年は？",
        options: ["2019年", "2020年", "2021年", "2022年"],
        correct: 2,
        difficulty: "上級",
        randomizeOptions: false
    },
    {
        question: "ジェシーがバラエティ番組でよく披露する特技は？",
        options: ["アクロバット", "マジック", "モノマネ", "すべて"],
        correct: 3,
        difficulty: "上級"
    },
    // ========== 新規追加問題 80問 ==========
    // 初級 20問
    {
        question: "髙地優吾のメンバーカラーは？",
        options: ["赤", "黄色", "青", "緑"],
        correct: 1,
        difficulty: "初級"
    },
    {
        question: "京本大我のメンバーカラーは？",
        options: ["ピンク", "紫", "青", "白"],
        correct: 0,
        difficulty: "初級"
    },
    {
        question: "田中樹のメンバーカラーは？",
        options: ["黒", "赤", "青", "緑"],
        correct: 0,
        difficulty: "初級"
    },
    {
        question: "松村北斗のメンバーカラーは？",
        options: ["赤", "青", "黒", "紫"],
        correct: 1,
        difficulty: "初級"
    },
    {
        question: "ジェシーのメンバーカラーは？",
        options: ["赤", "青", "黄色", "緑"],
        correct: 0,
        difficulty: "初級"
    },
    {
        question: "森本慎太郎のメンバーカラーは？",
        options: ["緑", "黄色", "青", "紫"],
        correct: 0,
        difficulty: "初級"
    },
    {
        question: "SixTONESの所属事務所は？",
        options: ["STARTO ENTERTAINMENT", "LDH", "エイベックス", "バーニング"],
        correct: 0,
        difficulty: "初級"
    },
    {
        question: "SixTONESのデビュー日は？",
        options: ["2020年1月22日", "2020年2月22日", "2020年3月22日", "2020年4月22日"],
        correct: 0,
        difficulty: "初級",
        randomizeOptions: false
    },
    {
        question: "SixTONESの公式ファンクラブ名は？",
        options: ["SixTONES FC", "ストーンズクラブ", "Island", "特に名称なし"],
        correct: 2,
        difficulty: "初級"
    },
    {
        question: "SixTONESが初めて出演した紅白歌合戦は？",
        options: ["2019年", "2020年", "2021年", "2022年"],
        correct: 1,
        difficulty: "初級",
        randomizeOptions: false
    },
    {
        question: "SixTONESのメンバーで最年少は？",
        options: ["森本慎太郎", "ジェシー", "田中樹", "松村北斗"],
        correct: 0,
        difficulty: "初級"
    },
    {
        question: "SixTONESの2ndシングルは？",
        options: ["NAVIGATOR", "NEW ERA", "マスカラ", "僕が僕じゃないみたいだ"],
        correct: 0,
        difficulty: "初級"
    },
    {
        question: "SixTONESの1stアルバムのタイトルは？",
        options: ["1ST", "SixTONES", "TONE", "STONES"],
        correct: 0,
        difficulty: "初級"
    },
    {
        question: "SixTONESのグループ名の由来に含まれないものは？",
        options: ["6つの音色", "6つの原石", "6人の個性", "6つの未来"],
        correct: 3,
        difficulty: "初級"
    },
    {
        question: "SixTONESのメンバー全員がジャニーズ事務所に入所したのは何年代？",
        options: ["1990年代", "2000年代", "2010年代", "バラバラ"],
        correct: 1,
        difficulty: "初級",
        randomizeOptions: false
    },
    {
        question: "SixTONESの楽曲「マスカラ」はどのシングルに収録されている？",
        options: ["3rdシングル", "4thシングル", "5thシングル", "6thシングル"],
        correct: 1,
        difficulty: "初級",
        randomizeOptions: false
    },
    {
        question: "SixTONESのYouTubeチャンネル「ストチャン」の特徴は？",
        options: ["バラエティ企画が多い", "音楽のみ", "ダンス動画のみ", "舞台裏のみ"],
        correct: 0,
        difficulty: "初級"
    },

    {
        question: "SixTONESの楽曲「僕が僕じゃないみたいだ」のジャンルは？",
        options: ["ロック", "バラード", "ダンス", "ラップ"],
        correct: 1,
        difficulty: "初級"
    },

    // 中級 40問
    {
        question: "京本大我の誕生日は？",
        options: ["12月3日", "12月5日", "12月7日", "12月9日"],
        correct: 0,
        difficulty: "中級"
    },
    {
        question: "田中樹の誕生日は？",
        options: ["6月15日", "6月20日", "6月25日", "6月30日"],
        correct: 0,
        difficulty: "中級"
    },
    {
        question: "松村北斗の誕生日は？",
        options: ["6月15日", "6月18日", "6月20日", "6月25日"],
        correct: 1,
        difficulty: "中級"
    },
    {
        question: "ジェシーの誕生日は？",
        options: ["6月10日", "6月11日", "6月12日", "6月13日"],
        correct: 1,
        difficulty: "中級"
    },
    {
        question: "森本慎太郎の誕生日は？",
        options: ["7月10日", "7月15日", "7月20日", "7月25日"],
        correct: 1,
        difficulty: "中級"
    },
    {
        question: "髙地優吾の出身地は？",
        options: ["神奈川県", "千葉県", "東京都", "埼玉県"],
        correct: 0,
        difficulty: "中級"
    },
    {
        question: "京本大我の出身地は？",
        options: ["東京都", "神奈川県", "千葉県", "埼玉県"],
        correct: 0,
        difficulty: "中級"
    },
    {
        question: "田中樹の出身地は？",
        options: ["千葉県", "神奈川県", "東京都", "埼玉県"],
        correct: 0,
        difficulty: "中級"
    },
    {
        question: "松村北斗の出身地は？",
        options: ["静岡県", "神奈川県", "千葉県", "東京都"],
        correct: 0,
        difficulty: "中級"
    },
    {
        question: "森本慎太郎の出身地は？",
        options: ["神奈川県", "東京都", "千葉県", "埼玉県"],
        correct: 0,
        difficulty: "中級"
    },
    {
        question: "SixTONESの3rdシングルのタイトルは？",
        options: ["NEW ERA", "NAVIGATOR", "マスカラ", "僕が僕じゃないみたいだ"],
        correct: 0,
        difficulty: "中級"
    },
    {
        question: "SixTONESの2ndアルバムのタイトルは？",
        options: ["CITY", "VOICE", "TONE", "SOUND"],
        correct: 0,
        difficulty: "中級"
    },
    {
        question: "髙地優吾のジャニーズ事務所入所年は？",
        options: ["2009年", "2010年", "2011年", "2012年"],
        correct: 0,
        difficulty: "中級",
        randomizeOptions: false
    },
    {
        question: "京本大我のジャニーズ事務所入所年は？",
        options: ["2005年", "2006年", "2007年", "2008年"],
        correct: 1,
        difficulty: "中級",
        randomizeOptions: false
    },
    {
        question: "田中樹のジャニーズ事務所入所年は？",
        options: ["2007年", "2008年", "2009年", "2010年"],
        correct: 0,
        difficulty: "中級",
        randomizeOptions: false
    },
    {
        question: "松村北斗のジャニーズ事務所入所年は？",
        options: ["2008年", "2009年", "2010年", "2011年"],
        correct: 1,
        difficulty: "中級",
        randomizeOptions: false
    },
    {
        question: "ジェシーのジャニーズ事務所入所年は？",
        options: ["2006年", "2007年", "2008年", "2009年"],
        correct: 0,
        difficulty: "中級",
        randomizeOptions: false
    },
    {
        question: "森本慎太郎のジャニーズ事務所入所年は？",
        options: ["2004年", "2005年", "2006年", "2007年"],
        correct: 2,
        difficulty: "中級",
        randomizeOptions: false
    },
    {
        question: "SixTONESが出演した初めての主演ドラマは？",
        options: ["私立バカレア高校", "ゆとりですがなにか", "パーフェクトワールド", "特になし"],
        correct: 0,
        difficulty: "中級"
    },


    {
        question: "髙地優吾の特技は？",
        options: ["歌", "ダンス", "ボイスパーカッション", "料理"],
        correct: 2,
        difficulty: "中級"
    },
    {
        question: "京本大我の特技は？",
        options: ["歌", "ギター", "ピアノ", "ドラム"],
        correct: 0,
        difficulty: "中級"
    },

    {
        question: "ジェシーの父親の国籍は？",
        options: ["アメリカ", "イギリス", "カナダ", "オーストラリア"],
        correct: 0,
        difficulty: "中級"
    },
    {
        question: "森本慎太郎の兄の名前は？",
        options: ["森本龍太郎", "森本翔太", "森本光太郎", "森本健太"],
        correct: 0,
        difficulty: "中級"
    },
    {
        question: "SixTONESの楽曲で最もYouTube再生回数が多いのは？（2024年時点）",
        options: ["Imitation Rain", "NAVIGATOR", "こっから", "NEW ERA"],
        correct: 2,
        difficulty: "中級"
    },
    {
        question: "SixTONESが初めてアリーナツアーを行ったのは？",
        options: ["2020年", "2021年", "2022年", "2023年"],
        correct: 0,
        difficulty: "中級",
        randomizeOptions: false
    },


    {
        question: "京本大我の父親の名前は？",
        options: ["京本政樹", "京本雅樹", "京本正樹", "京本昌樹"],
        correct: 0,
        difficulty: "中級"
    },
    {
        question: "田中樹の兄の田中聖が所属していたグループは？",
        options: ["KAT-TUN", "関ジャニ∞", "NEWS", "Kis-My-Ft2"],
        correct: 0,
        difficulty: "中級"
    },
    {
        question: "髙地優吾がよく担当するパートは？",
        options: ["高音", "低音", "ラップ", "すべて"],
        correct: 0,
        difficulty: "中級"
    },
    {
        question: "SixTONESのメンバーで身長が最も高いのは？",
        options: ["ジェシー", "松村北斗", "髙地優吾", "森本慎太郎"],
        correct: 0,
        difficulty: "中級"
    },
    {
        question: "SixTONESの楽曲制作に関わることが多いメンバーは？",
        options: ["京本大我", "田中樹", "松村北斗", "全員"],
        correct: 1,
        difficulty: "中級"
    },
    {
        question: "SixTONESがデビュー前に出演していた舞台は？",
        options: ["滝沢歌舞伎", "少年たち", "DREAM BOYS", "すべて"],
        correct: 3,
        difficulty: "中級"
    },
    {
        question: "森本慎太郎がドラマ「パーフェクトワールド」で演じた役柄は？",
        options: ["主人公の友人", "主人公の弟", "主人公のライバル", "医師"],
        correct: 1,
        difficulty: "中級"
    },
    {
        question: "SixTONESのメンバーが全員出演したバラエティ番組は？",
        options: ["VS魂", "世界の果てまでイッテQ!", "ザ!鉄腕!DASH!!", "すべて"],
        correct: 0,
        difficulty: "中級"
    },
    {
        question: "京本大我の愛称は？",
        options: ["きょも", "たいが", "きょうちゃん", "すべて"],
        correct: 0,
        difficulty: "中級"
    },
    {
        question: "田中樹の愛称は？",
        options: ["じゅり", "たなか", "じゅったん", "すべて"],
        correct: 0,
        difficulty: "中級"
    },
    // 上級 20問
    {
        question: "髙地優吾が入所当時、最初に所属したユニットは？",
        options: ["B.I.Shadow", "Love-tune", "Mis Snow Man", "バックダンサーのみ"],
        correct: 0,
        difficulty: "上級"
    },
    {
        question: "京本大我が子役として出演したドラマは？",
        options: ["金田一少年の事件簿", "美少年探偵団", "探偵学園Q", "すべて"],
        correct: 0,
        difficulty: "上級"
    },
    {
        question: "田中樹が作詞・作曲に関わった初めての楽曲は？",
        options: ["Good Luck!", "Rosy", "Laugh In the LIFE", "特になし"],
        correct: 2,
        difficulty: "上級"
    },
    {
        question: "松村北斗が雑誌「anan」で連載していた企画は？",
        options: ["映画レビュー", "小説連載", "インタビュー企画", "写真撮影"],
        correct: 1,
        difficulty: "上級"
    },
    {
        question: "ジェシーの以前の芸名は？",
        options: ["ジェシー・ルイス", "ルイス・ジェシー", "ジェシー・マサヒロ", "マサヒロ・ジェシー"],
        correct: 1,
        difficulty: "上級"
    },
    {
        question: "森本慎太郎が子役として出演した映画は？",
        options: ["スノープリンス 禁じられた恋のメロディ", "スペーストラベラーズ", "金田一少年の事件簿", "電車男"],
        correct: 0,
        difficulty: "上級"
    },
    {
        question: "SixTONESの結成時、最初のメンバー構成で含まれていなかったのは？",
        options: ["全員最初からメンバー", "森本慎太郎", "ジェシー", "髙地優吾"],
        correct: 0,
        difficulty: "上級"
    },

    {
        question: "松村北斗がモデルを務めた雑誌は？",
        options: ["anan", "non-no", "ViVi", "すべて"],
        correct: 3,
        difficulty: "上級"
    },

    {
        question: "田中樹がベースを弾き始めたきっかけは？",
        options: ["父親の影響", "兄弟の影響", "友人の影響", "自分から"],
        correct: 3,
        difficulty: "上級"
    },
    {
        question: "ジェシーの身長は？",
        options: ["180cm", "184cm", "186cm", "188cm"],
        correct: 1,
        difficulty: "上級",
        randomizeOptions: false
    },
    {
        question: "京本大我が影響を受けた歌手は？",
        options: ["マイケル・ジャクソン", "フレディ・マーキュリー", "スティービー・ワンダー", "すべて"],
        correct: 1,
        difficulty: "上級"
    },

    {
        question: "髙地優吾の血液型は？",
        options: ["A型", "B型", "O型", "AB型"],
        correct: 0,
        difficulty: "上級"
    },
    {
        question: "京本大我の血液型は？",
        options: ["A型", "B型", "O型", "AB型"],
        correct: 1,
        difficulty: "上級"
    },
    {
        question: "松村北斗が出演した舞台「滝沢歌舞伎」で演じた役の特徴は？",
        options: ["殺陣", "歌唱", "ダンス", "すべて"],
        correct: 3,
        difficulty: "上級"
    },

    {
        question: "田中樹が尊敬するラッパーで、実際に共演したことがあるのは？",
        options: ["KREVA", "ZEEBRA", "AK-69", "すべて"],
        correct: 0,
        difficulty: "上級"
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

// グローバル変数
let username = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timer = null;
let isAnswered = false;
let weeklyStats = { correct: 0, total: 0 };
let bestWeeklyRate = 0;
let currentTitle = null;
let newTitleAchieved = false;

// 週の開始日（月曜日0時）を取得
function getWeekStart() {
    const now = new Date();
    const day = now.getDay();
    const diff = day === 0 ? -6 : 1 - day;
    const monday = new Date(now);
    monday.setDate(now.getDate() + diff);
    monday.setHours(0, 0, 0, 0);
    return monday.toISOString().split('T')[0];
}

// 初期化
async function init() {
    try {
        const savedUsername = localStorage.getItem('sixtonesQuizUsername');
        
        if (savedUsername) {
            username = savedUsername;
            await loadUserStats();
            showScreen('startScreen');
            updateStartScreen();
        } else {
            showScreen('usernameScreen');
        }
    } catch (error) {
        console.error('初期化エラー:', error);
        showScreen('usernameScreen');
    }
}

// 画面表示の切り替え
function showScreen(screenId) {
    const screens = ['loadingScreen', 'usernameScreen', 'startScreen', 'quizScreen', 'resultScreen', 'rankingScreen'];
    screens.forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
    document.getElementById(screenId).classList.remove('hidden');
}

// ユーザー統計の読み込み
async function loadUserStats() {
    try {
        const weekStart = getWeekStart();
        const userDocRef = db.collection('users').doc(username);
        const userDoc = await userDocRef.get();
        
        if (userDoc.exists) {
            const data = userDoc.data();
            
            if (data.weekStart === weekStart) {
                weeklyStats = { correct: data.correct || 0, total: data.total || 0 };
            } else {
                weeklyStats = { correct: 0, total: 0 };
            }
            
            bestWeeklyRate = data.bestRate || 0;
            currentTitle = data.title || null;
        } else {
            weeklyStats = { correct: 0, total: 0 };
            bestWeeklyRate = 0;
            currentTitle = null;
        }
    } catch (error) {
        console.error('統計読み込みエラー:', error);
        weeklyStats = { correct: 0, total: 0 };
        bestWeeklyRate = 0;
        currentTitle = null;
    }
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
    
    const rate = weeklyStats.total > 0 
        ? ((weeklyStats.correct / weeklyStats.total) * 100).toFixed(1)
        : '0.0';
    
    document.getElementById('weeklyRate').textContent = rate + '%';
    document.getElementById('weeklyDetail').textContent = 
        `(${weeklyStats.correct} / ${weeklyStats.total})`;
    document.getElementById('bestRate').textContent = bestWeeklyRate.toFixed(1) + '%';
    
    // 称号の表示（今週の正答率に応じて）
    const titleDisplay = document.getElementById('titleDisplay');
    const currentRate = weeklyStats.total > 0 
        ? ((weeklyStats.correct / weeklyStats.total) * 100)
        : 0;
    const displayTitle = getTitleForRate(currentRate);
    
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
    showScreen('startScreen');
    updateStartScreen();
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

// クイズ開始
document.getElementById('startQuizBtn').addEventListener('click', () => {
    startQuiz();
});

// ランキング表示
document.getElementById('viewRankingBtn').addEventListener('click', async () => {
    showScreen('rankingScreen');
    await loadAndShowStandaloneRanking();
});

// トップに戻る
document.getElementById('backToTopBtn').addEventListener('click', () => {
    showScreen('startScreen');
});

function startQuiz() {
    const shuffled = [...quizData].sort(() => Math.random() - 0.5);
    currentQuestions = shuffled.slice(0, 10);
    currentQuestionIndex = 0;
    score = 0;
    
    showScreen('quizScreen');
    showQuestion();
}

// 問題表示
function showQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        finishQuiz();
        return;
    }
    
    const question = currentQuestions[currentQuestionIndex];
    
    document.getElementById('questionCounter').textContent = 
        `問題 ${currentQuestionIndex + 1}/10`;
    document.getElementById('scoreDisplay').textContent = `正解: ${score}`;
    document.getElementById('questionText').textContent = question.question;
    
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
    startTimer();
}

// タイマー開始
function startTimer() {
    timeLeft = 15;
    const timerEl = document.getElementById('timer');
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
    
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex >= currentQuestions.length) {
            finishQuiz();
        } else {
            showQuestion();
        }
    }, 1500);
}

// クイズ終了
async function finishQuiz() {
    console.log('finishQuiz開始');
    
    showResultScreenWithCurrentData();
    
    try {
        const weekStart = getWeekStart();
        
        weeklyStats.correct += score;
        weeklyStats.total += 10;
        
        const newRate = (weeklyStats.correct / weeklyStats.total) * 100;
        
        if (newRate > bestWeeklyRate) {
            bestWeeklyRate = newRate;
        }
        
        const newTitle = getTitleForRate(newRate);
        const oldTitleRate = currentTitle ? currentTitle.rate : -1;
        newTitleAchieved = newTitle.rate > oldTitleRate;
        
        if (newTitleAchieved || !currentTitle) {
            currentTitle = newTitle;
        }
        
        const userDocRef = db.collection('users').doc(username);
        await userDocRef.set({
            username: username,
            weekStart: weekStart,
            correct: weeklyStats.correct,
            total: weeklyStats.total,
            rate: newRate,
            bestRate: bestWeeklyRate,
            title: currentTitle,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        console.log('Firestore保存完了');
        
        await updateRanking();
        
        console.log('ランキング更新完了');
        
        updateResultScreenWithTitle();
        
        await loadAndShowRanking();
        
        console.log('ランキング表示完了');
    } catch (error) {
        console.error('クイズ終了処理エラー:', error);
    }
}

// 結果画面を現在のデータで表示
function showResultScreenWithCurrentData() {
    showScreen('resultScreen');
    
    document.getElementById('resultScore').textContent = `${score} / 10`;
    
    let emoji, message;
    if (score === 10) {
        emoji = '🏆';
        message = '完璧！SixTONESマスターだね！';
    } else if (score >= 8) {
        emoji = '🎉';
        message = 'すごい！SixTONES通だね！';
    } else if (score >= 6) {
        emoji = '😊';
        message = 'いい感じ！もう少し！';
    } else if (score >= 4) {
        emoji = '🤔';
        message: 'まあまあかな。もっと知ろう！';
    } else {
        emoji = '😅';
        message = 'もっとSixTONESのこと知ってね！';
    }
    
    document.getElementById('resultEmoji').textContent = emoji;
    document.getElementById('resultMessage').textContent = message;
    
    const tempCorrect = weeklyStats.correct + score;
    const tempTotal = weeklyStats.total + 10;
    const rate = ((tempCorrect / tempTotal) * 100).toFixed(1);
    document.getElementById('resultWeeklyRate').textContent = rate + '%';
    document.getElementById('resultWeeklyDetail').textContent = 
        `(${tempCorrect} / ${tempTotal})`;
    
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

// ランキング更新
async function updateRanking() {
    try {
        const weekStart = getWeekStart();
        const rankingDocRef = db.collection('rankings').doc(weekStart);
        
        const rankingDoc = await rankingDocRef.get();
        let rankings = [];
        
        if (rankingDoc.exists) {
            rankings = rankingDoc.data().data || [];
        }
        
        const existingIndex = rankings.findIndex(r => r.username === username);
        const userData = {
            username: username,
            rate: (weeklyStats.correct / weeklyStats.total) * 100,
            correct: weeklyStats.correct,
            total: weeklyStats.total
        };
        
        if (existingIndex >= 0) {
            rankings[existingIndex] = userData;
        } else {
            rankings.push(userData);
        }
        
        rankings.sort((a, b) => b.rate - a.rate);
        rankings = rankings.slice(0, 50);
        
        await rankingDocRef.set({
            weekStart: weekStart,
            data: rankings,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    } catch (error) {
        console.error('ランキング更新エラー:', error);
    }
}

// ランキング読み込みと表示
async function loadAndShowRanking() {
    try {
        const weekStart = getWeekStart();
        const rankingDocRef = db.collection('rankings').doc(weekStart);
        const rankingDoc = await rankingDocRef.get();
        
        const rankingList = document.getElementById('rankingList');
        const noRanking = document.getElementById('noRanking');
        
        if (rankingDoc.exists) {
            const rankings = rankingDoc.data().data || [];
            const top10 = rankings.slice(0, 10);
            
            if (top10.length > 0) {
                rankingList.innerHTML = '';
                noRanking.classList.add('hidden');
                
                top10.forEach((rank, index) => {
                    const li = document.createElement('li');
                    li.className = 'ranking-item';
                    
                    if (index === 0) li.classList.add('first');
                    else if (index === 1) li.classList.add('second');
                    else if (index === 2) li.classList.add('third');
                    
                    if (rank.username === username) {
                        li.classList.add('current');
                    }
                    
                    li.innerHTML = `
                        <div>
                            <span class="rank-number">${index + 1}位</span>
                            <span class="rank-username">
                                ${rank.username}${rank.username === username ? ' (あなた)' : ''}
                            </span>
                        </div>
                        <div>
                            <span class="rank-rate">${rank.rate.toFixed(1)}%</span>
                            <span class="rank-detail">(${rank.correct}/${rank.total})</span>
                        </div>
                    `;
                    
                    rankingList.appendChild(li);
                });
            } else {
                rankingList.innerHTML = '';
                noRanking.classList.remove('hidden');
            }
        } else {
            rankingList.innerHTML = '';
            noRanking.classList.remove('hidden');
        }
    } catch (error) {
        console.error('ランキング読み込みエラー:', error);
        document.getElementById('noRanking').classList.remove('hidden');
    }
}

// スタンドアロンランキング表示（トップ画面から呼ばれる）
async function loadAndShowStandaloneRanking() {
    try {
        const weekStart = getWeekStart();
        const rankingDocRef = db.collection('rankings').doc(weekStart);
        const rankingDoc = await rankingDocRef.get();
        
        const rankingList = document.getElementById('rankingListStandalone');
        const noRanking = document.getElementById('noRankingStandalone');
        
        if (rankingDoc.exists) {
            const rankings = rankingDoc.data().data || [];
            const top10 = rankings.slice(0, 10);
            
            if (top10.length > 0) {
                rankingList.innerHTML = '';
                noRanking.classList.add('hidden');
                
                top10.forEach((rank, index) => {
                    const li = document.createElement('li');
                    li.className = 'ranking-item';
                    
                    if (index === 0) li.classList.add('first');
                    else if (index === 1) li.classList.add('second');
                    else if (index === 2) li.classList.add('third');
                    
                    if (rank.username === username) {
                        li.classList.add('current');
                    }
                    
                    li.innerHTML = `
                        <div>
                            <span class="rank-number">${index + 1}位</span>
                            <span class="rank-username">
                                ${rank.username}${rank.username === username ? ' (あなた)' : ''}
                            </span>
                        </div>
                        <div>
                            <span class="rank-rate">${rank.rate.toFixed(1)}%</span>
                            <span class="rank-detail">(${rank.correct}/${rank.total})</span>
                        </div>
                    `;
                    
                    rankingList.appendChild(li);
                });
            } else {
                rankingList.innerHTML = '';
                noRanking.classList.remove('hidden');
            }
        } else {
            rankingList.innerHTML = '';
            noRanking.classList.remove('hidden');
        }
    } catch (error) {
        console.error('ランキング読み込みエラー:', error);
        document.getElementById('noRankingStandalone').classList.remove('hidden');
    }
}

// もう一回やるボタン
document.getElementById('restartBtn').addEventListener('click', () => {
    showScreen('startScreen');
    updateStartScreen();
});

// アプリ初期化
init();
