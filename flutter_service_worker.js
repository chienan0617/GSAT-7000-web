'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "43e77f1d805079d6f832216a5285e16b",
".git/config": "cd4e22046b06e771955669fbb2a7fb2b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9e015873d1b29aafbf9338ddb22c9ac1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f4a41895f3ccac8bbf2c1f2e1ccdc0eb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "227ff80e8a493c15fcf972a4bb79de81",
".git/logs/refs/heads/main": "895fff22b39c371b040cd7c4706cb196",
".git/logs/refs/remotes/origin/main": "58b422eef313107e99d2eb501ecaeec5",
".git/objects/00/4b0d45070f7774fbb7c94f8f75a2aa2834e785": "36d6176e2c4902b1a4a1eccbfabe3d73",
".git/objects/02/19749120a7962d034f0e34e2a636e14fd8be45": "3eed28b5aa0c2239aa99d284818a618e",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/0b/f7be8fc9fd8d0cf1b125765973ab8885843e66": "8f6faa4990d04a1ce20e3489b4067389",
".git/objects/0f/03f08b3acc8adc41e779491d8c5f5c525531f0": "c0ed4d23f211a8e5aca983b73c1f0fd5",
".git/objects/12/50959dde6122df4b24d43427a137d843dd5cc9": "5da4170318bb0e72a8ddf12a3f8cd1d9",
".git/objects/15/e53be2fb8aa04c3145e01d46adebb622c05187": "87624876762302c3c1142c699efa49b3",
".git/objects/18/3e34a592d2304bed40a2764ae69fe5bcb41c37": "e7088a4dea2485f397730c02fb80cc74",
".git/objects/19/fa77a95ea99592728eb4f16e307020d35dcae4": "cd823b72fa99bca5f6b1f5a7bfd447e7",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/21/572d21baa70627263e97263f4ffd087fb28fc3": "ffa0be07d9c8ceae78d091a661014558",
".git/objects/22/4bcc10b7e376ff0afe0fd5df3875d4386af97e": "e3a5c784bc884c86233bcb9db7ca3683",
".git/objects/22/58b9c80660206e930fa50f066c8eb1f16687ed": "a368a6c85ef659992c44b214f4da7cb1",
".git/objects/24/25239d86af7021d13fad8100eb51aae0e38cef": "56019a57651cc0517e658708dcb96413",
".git/objects/27/cedd20d67df0da4c3851d67907d8fb2293421b": "bb638885689146d39542521a2c33af2a",
".git/objects/28/31f1f9330d39c57f692a9d9da39a244e22d940": "d8f035ec8eb75efee89f9229fa528a53",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2d/b6143478a20787a19c13a5f10faffdc0119d0d": "cda4f393bd8cbfd885ddfd5a2e3de505",
".git/objects/30/418b94edaa00dbf067d175e547fed57bfdeae0": "5231c2774aab86d46e5de0779789ef7b",
".git/objects/30/60ad96f13fc2d419d52d4f448533550afccb5a": "6629eb0b61597b321b225393231dd41a",
".git/objects/31/61eae5aff5e629158bbf3926343cbcbecd56e5": "a329b45deccfee5def5bbb1ced5628d5",
".git/objects/32/e040d3a3e307592c4d6e5314467a1325b3e8a8": "8207e2d8e78f291fc82fe2a290d78a14",
".git/objects/33/e21112c659c4e644ab37f2ccac4b8cba9e669a": "a6a1bdc59e9646770b8e011d64c071ce",
".git/objects/34/de70bc56b1cbdd178bc29ee0bac1864858df7b": "04a47737d23fe354a07da66e95b4334f",
".git/objects/36/590efc2b4f71da774f6963c65e1f31f8428a17": "d0784653c9f2aaf67fcf1165607ade74",
".git/objects/36/c09c398c253253d463aed7f491e5bc79eb13cd": "55189312f1f5a685cd19a0b2edc4a2cd",
".git/objects/37/efdc8b22142d62859b30bfd32fad941313b6a1": "3e724662f28590bc7c213ee7c2f6fd15",
".git/objects/38/490b65f60e4ed075451f737114536066d410b6": "590f6c7f77bec233386ca05458d9c061",
".git/objects/39/69143de6f0348bb825dde3f687178c17a52467": "06424c4bafda6c955212cc54a611d1ad",
".git/objects/39/8f60b5d1a2a8881bba5183557d5ffda60c01ed": "dc488efb9ae6f9bb316e74eb5fd50e9f",
".git/objects/3a/e0b7ce3e5b0531232c09a91e44b9072b633a93": "ec7028acd797a90451ee7c381965a4d2",
".git/objects/3c/72197fc0c255cb4373ed149276e6f735fd84b3": "7efcf343192e2506929a319df68e167d",
".git/objects/3d/4b69a3b78670466d6ab4070409062e72fa314e": "0a1b5725889abb8fe797cacabbedce1d",
".git/objects/3e/2d1f630d9fa8e11fa5d21fe02e34d004238dee": "16ad335cd24badda9a6f9f90037c8132",
".git/objects/3e/4a83fc96bacd19941e50fab59b2e23f476e1b4": "17d49141718226b564760c475383ed8e",
".git/objects/3e/4c9c667f8278b54cc22817dfb0795f744080e4": "85e68af930ab6b953f7eff737cf4c680",
".git/objects/41/15f6622aa7a05f5a1b39347908f1a88da1a98c": "eb37c29f57e572ad7ed8bb2e5f5222d4",
".git/objects/43/d3d7fd683abda91cdb26cee445a24b9874ed57": "ea06fedfa17c6c5efdeac1aa7bd9fe24",
".git/objects/44/fad9bbdaa82970573259f95477a0adce056451": "f695de8e3ffb115f4e72b6af4d188ab3",
".git/objects/47/834f7fa579cc95c265eccf5cf15405209e8e87": "5d71d9f06abee485418531ca1e3ebed8",
".git/objects/47/8f74fa40aebce3daf7a2253b8a8f45968b1190": "f078522ff68d827546aba0e26d3c96ba",
".git/objects/48/970bc699680f2e01b17127a9e1aaa16ded5735": "a95d2ebaf474641b27ea51154f94caea",
".git/objects/4c/0c438d4acbc4cfd8316324fbd12199e6e39889": "d2a7cdc342458903d2484e6cc22b54ae",
".git/objects/4c/811612f7b4ec2c1311ae3cb34a8aad5856c4b8": "9c9cb5f0c358b7a638efd2f3c26aa5a6",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4e/385aa8b5f33223f1d7f1266baa6535cdcd5243": "1f6211494612cd8002a5e67ba04047bc",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/51/5967764a32469f365af0a49fc782baa02c98be": "18a43e6b5ca8a81d383a9852034b9540",
".git/objects/51/5a4b1464f63aedb81eaee5884fb3ef765d0f9d": "474aeed26a92e57418310245d55579dd",
".git/objects/55/234c34840eaa78c7157bf9efd30c36716b8eb4": "c73365de2002c173bfd897830913a659",
".git/objects/55/ea4d979fc8d4cb5897bc51a1d0d001e6da8712": "f7b7cae3d77db6648a2f821258ee1469",
".git/objects/59/e563a1b055b36c0caa8c0d199d16c084a794b0": "232e77ec7a53f2f49f5a4f1dcf1737e1",
".git/objects/5b/9beb6499b42bd735fc0c3fad5a75b4729926bb": "525f7b391242034f4e8632f5bb037b37",
".git/objects/5d/8ed717dd8c99af8037368d46ffbcdd45d94752": "a26ab02bf47968a2e6bd57a2bcd8b74d",
".git/objects/5f/5fd6efebd61c584606c6350562d1f76cbeacfa": "d53fb7decdb5619b60fa6fd09c8611c0",
".git/objects/64/2705d4c816eb05ceffa6fd0038f75080cbc05e": "0dedf1f5aa5d5cb579798fed36600087",
".git/objects/69/52107a5af99483a2d4b2ef2202c4154e48f528": "43ba4c13877baf10e2c711ae480f4596",
".git/objects/6a/026b9dc45384947755457d47341af1f9697c8f": "f6a90cc5bec5e0806c120dc806f40c70",
".git/objects/6b/b3b9e93726162aed6e5658d34f2c41b76bbc1b": "174c62005a5854a5b444e36b8b13ca2e",
".git/objects/6c/9474571fdff3afac977be9bee907d6c39e2bc6": "87d8f07301afe9c9b34123a30d6d46ac",
".git/objects/6c/fb7e2f331c75e48c5d657644f0a7a78c121259": "50e8210eb9b6cbf5506d9d1a6e6a35bb",
".git/objects/6e/ee8b662f0158fe095b053ac34e5c85f3ab038e": "aeccdf64f0bea2d3b1989b5ac2df5e77",
".git/objects/72/a50949ac8102b78a4c9919343002c4a16494a2": "312903903bc9d04a63e3f8bd5a37be41",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7b/2a933134b321b2b49b144a43809060e162493f": "b513a61a66c6fca4302f4005b73e2d65",
".git/objects/7f/3d9673fafcb0cf3a94d14589484fcdc874c5a1": "529936d69bc597925fcdefe5862d9f70",
".git/objects/80/30ff34928417c0fcdf3924412c945f0016ed77": "d41a0754cc832593842620b16d9dd9b9",
".git/objects/80/9a49e64870ced200085182970e649027c5eac2": "24f7d005bee4523445dcde227ecc5fea",
".git/objects/82/15f81e1163af47817f14b12e84128e6324ef88": "961458773e7f83cef84db8e3e0ef82a6",
".git/objects/84/b1cbbabe6efe74a53d52efd75c2d7d9e43625c": "0f17f4bc4da5d6172926891718139e25",
".git/objects/86/6d68cd181418dd57a76bd529561233480d900e": "2683d28ec68c206ab9138af673382582",
".git/objects/88/a7d2e465314f03474bff3c9c96eccc4340cdc6": "88a416947387d60f910a05c26f09bb0f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/e808f85728c6a851a8f123c184c8c677da203b": "d1252d79ab44010ba6422547aaa1a5f9",
".git/objects/8a/8611a5836243678f08e7b5081afee916be03b9": "6551043f49adab67a6b2923b0098ad6e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/322d9be6689e0f28651c8349d58c84d361e5c3": "b9739aadd893a203ccc354cef6ae262a",
".git/objects/8c/f1e68020f8c3da0da593b587302e6385cf2ca5": "c502183fd03f948986fadd860c8c0d43",
".git/objects/8f/ae38a7c57f0cf90d72e6d9a0a675bbdad45aaf": "bfea6f7a84aff60c7056a4cb75a6cffb",
".git/objects/93/c1789a4bb20411cb221bd3549c2fcb8df09e8c": "d16ca5de1622e3942f21a28458302c94",
".git/objects/94/b01a798e2fc6b4a75a0db5d970fb0fb813a37c": "8e5561afcbc06ff0d235b34db1edd43f",
".git/objects/95/fdfec81aaa9ab8f98cdae48acdb15c809a2eb8": "7fc7dd779cdb57e4144c3c49a7fac15c",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/c427259099950d5f545e5914a5a30a19a88ad3": "ec62452aa8cd2eea3aa628f692d1bf4a",
".git/objects/9b/13e12decf1333bb89de4df284ab8b48a81570a": "4154bc83c5b9a5aa8e7f267b9db20880",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9b/e3fec896aa2cf9638b595f61c84e6d5bc8ba6d": "66f2c00a53e69ec99713a62d2602b9af",
".git/objects/9b/f0a1a142043ad344d812d2d82658aec4ec5319": "87df1d632f08e01455013b9276134491",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9f/f2b63cc62212d99eb8604e93a059a321201f6d": "66ad661df6ed44c65db2823239ab8a6b",
".git/objects/a0/3619f384cf4be1980b5decfb1a9b173f2908bd": "65e3b248906993f575dc82c9ba6ac8a2",
".git/objects/a2/cbda7c4f30e81b9fe80d0124a601cd7aec5f55": "f12ade3128058605ad27c462fd35e00d",
".git/objects/a7/ac3b7f1c4af2c95d9e17208919c194cc2ca654": "56eaf3840064c687baf14de16a6507ab",
".git/objects/a8/e0441192f1956041e9b6c3d5468cddbee5e9fc": "b04e67f8c4cc57fb6672d15fb58bb43d",
".git/objects/ae/91e6c755c839815449f847c272fa8a7a5c1c80": "b5401a4cacbdcd2d00d78b7f636b0f4a",
".git/objects/b1/c8acf89ef5b7ad69ea16bd2e32a3207d8210f2": "cf105a9b2ab57450426d6b04822e64f4",
".git/objects/b2/62c2627142759cac61ee6adfd65d80fc3e145e": "a51a5f5dee66b1e8ef09e6da597adc6a",
".git/objects/b3/8e5bf84812802aede030327c4517f8604f4b2b": "6fdeeca9f0a5f0242f661a1466fbf1f0",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/b0fb4a0a69b61e5cde1cbedcc63c682bbf20cb": "d55a65ac64fb31b0eeaa1eeafd9c4f3d",
".git/objects/bb/d0170bbc43f2b77668727d2e708528cd7ce6e4": "304f5fc0a9014a90c48e914e1d373929",
".git/objects/bc/043fc35781fdf9b1788f0213b9f698dbd6bfa3": "134a71acd3d816ff00b19274da5d2442",
".git/objects/bd/3e267732d3839200e2579667cdff60d8b7f365": "173aa351e0c79f2c38431eda8ebb4b5e",
".git/objects/c0/6cadc78973c468225c35dda26ac7b16b064d3c": "6fb4cd0fb8d4a6b6c82a421603eb6ea8",
".git/objects/c1/943f196571e3430784a40dc16566c6fb614f3a": "eaafee451cd1edded6f4c6c40bec7b30",
".git/objects/c2/ed53f74463055b67b1be9e1a9b11b1f1c14f12": "128df213a24f2724fbd2528bd5ebca2d",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c4/b489e8d314837d245c431dac5d19ff7a5328f7": "163104a6e90e049161702e7f7c6eaf5c",
".git/objects/c5/712b0763276474a247fc27f29c5d0868cba2c6": "82bf4e6af73b62fde2affbe60b8d5634",
".git/objects/c8/a48e2a1f5812d493d6ff1d344dbbe4a7a399f6": "8d350930d6fefe3777a27a91b7c56bed",
".git/objects/c9/7f7aa176eff0a9da025b5e137c25f86ee6b836": "ce9402ab10a65c859f5d33321722b5d4",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cb/61aa696887fc7ecbfeddaecd9b3072f08bce2f": "dc8e140b346589c0f3ba7d0b97ac6160",
".git/objects/cd/6ba840329b7608f96a5ed4150c45a8c75fb301": "297c8f405e15a78233a0280111340474",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/9e5adb2fd5c3c6cdc63bf5d2c9481bf9bc0a93": "5c0ea921e51f7412d7e5b2b65bde4662",
".git/objects/d9/ea5e3bb6c6e80029920d3261ab17a77bfd5683": "593ab8dee41e7afcc35c56ff8529a513",
".git/objects/db/3756c07f3f1dddbd064d660958d4b58b74f46f": "0115f96abbbbddad78c3759dcf3ec083",
".git/objects/db/d5ee556c586dfdca62991b1bc0fed7b3ab21c9": "93dc947ecd1f8a51c838308a723e553d",
".git/objects/df/e33a55050d0fd3b60124c8d9b75abfcaffe450": "d05b94638e5b0af7af7f8e3e0e832862",
".git/objects/e0/5b9673a5d90170512a8f338ae33bf36e335082": "14477d166f09f502ce153324d8717af3",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e4/d656c491262a9b01d1058ae3821a59c2a884f6": "e9be9dbfcc5e6b3a39b09feae1c52f26",
".git/objects/e5/30cf836a1ff4cc7ccc7d293bdb609482881509": "8285fd7c864c1a842afb202d51fb45ba",
".git/objects/e7/4e23ed8d0ebea564c46e586fd0c0090cb8ba17": "c8cff33d13ba3435c7908497c50d592d",
".git/objects/e8/2825f693c05e81abec46c0b9a2a732935a44cd": "721dfee63c6133ad2b79b39660762383",
".git/objects/e8/edd252836c64c582953f0c011deb434c36d39d": "36f95294327bbf0b726eec3a5cf4dee1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ef/2d8e9a535da4602c0b39a08a5f23d8913e32a5": "de9c30e3bbfd1e8571081d3e40b7e1eb",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/b55f239fb54180858300c66d38b8428a66bd46": "ab1702c46443c3cc35ca4ac334faac76",
".git/objects/fa/639141af21e36741cca42bcbb3be95a3b4e45e": "ab3e73a39d1f2fa24d3098fc6a7acae8",
".git/objects/fd/7dc5a5d06ab0e66e5315e2bf0c35f74b7bde5f": "4d50e28cab1d07437fc9595ddc715547",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ff/64888ebde1e1967d635e8dc3ad7bed8d5135de": "3c1388b745f7f475b37d2e867e4a8ce9",
".git/ORIG_HEAD": "cd957bada80d08c1b83be11747f4e3e8",
".git/refs/heads/main": "d5741736a403c68db4517abb58a32f39",
".git/refs/remotes/origin/main": "d5741736a403c68db4517abb58a32f39",
"assets/AssetManifest.bin": "73c32afe7cff742427f782ec9512c02c",
"assets/AssetManifest.bin.json": "fb9ad0596e63ae334a4d79ee954a0bed",
"assets/AssetManifest.json": "8fd098d85f373d46883653b56128e190",
"assets/assets/document/color.json": "507b038046f10e9ea7479c9239310cec",
"assets/assets/document/colors.json": "ad0d908159225e90dc1924b63c073f50",
"assets/assets/document/language/en.json": "4eb90f863479ebd20222c4aed0f7086e",
"assets/assets/document/language/zh.json": "e7ee33fc97ffc0b37b29c15df5450fdf",
"assets/assets/document/language.json": "561178a5945117a9dff9c4461501432e",
"assets/assets/document/register.json": "04912a7d3bd69b51f764b8edf559bd1b",
"assets/assets/document/styles.dart": "7162101a46fc8bf760dbd62ee5c90c5a",
"assets/assets/document/system.json": "fd11b77dc320ffae3528bcdfba33f6c6",
"assets/assets/document/tutorial/en.json": "13746e692f59d3aa9d2dd908c90558f3",
"assets/assets/document/tutorial/tutorial.json": "91f64881e7785b93e968f0c3d0c1fd36",
"assets/assets/document/tutorial/zh.json": "fdd54c37cca7ee2c59b1f9cbbf778c03",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Bold.ttf": "52e5e29a7805a81bac01a170e45d103d",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Light.ttf": "9ef30f36fbe394633b7235332346f5b1",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Medium.ttf": "518133df6fcaf4237f97187e2ea1019e",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Regular.ttf": "778bb9a271006ab9d103287699611325",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-SemiBold.ttf": "b7bae4f584fc5d817de4178708946eb0",
"assets/FontManifest.json": "9f0e757b134b904e3fc90aa9b50f799b",
"assets/fonts/MaterialIcons-Regular.otf": "eef9de98c257f7ccc7537a8cb553f3a6",
"assets/NOTICES": "f01af16abfc438516836715fa5d827cf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.ico": "182f6214b4c89e677f099006fc100641",
"favicon.png": "8900f4d823ea426c8d860c59d2d3f581",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "7ff72fef18cef21fe5da2aca626e0865",
"icons/icon-192-maskable.png": "4e9b5edc64dd4e2815d0330e5874d6be",
"icons/icon-192.png": "44e8c9755c6675884588ef3946475e72",
"icons/icon-512-maskable.png": "28fb9027db2a8637647f1d09fc0a3a9f",
"icons/icon-512.png": "3347dd297b218d01b12cbfa7257d53bf",
"icons/Icon-maskable-192.png": "755e1469e08856a7306df305d308cbc7",
"icons/Icon-maskable-512.png": "28fb9027db2a8637647f1d09fc0a3a9f",
"index.html": "abe1b3bba512609d7ebac6541cc16e60",
"/": "abe1b3bba512609d7ebac6541cc16e60",
"main.dart.js": "2f91f5fcf90cf266e51730c933bbf9c1",
"manifest.json": "d665887693e55c193c7f4481e4b1f582",
"README.md": "7b16a176162de2aaa53bc3e8ac3fb70a",
"splash/img/dark-1x.png": "231ae5760bb99487d092a7de75f67db5",
"splash/img/dark-2x.png": "65b513b44b2fc82fcbaa25f51fc45ca1",
"splash/img/dark-3x.png": "8cbf430336eaebde50718a7f3f219134",
"splash/img/dark-4x.png": "4ed9c521202fcc9b06421d5d54ea3165",
"splash/img/light-1x.png": "231ae5760bb99487d092a7de75f67db5",
"splash/img/light-2x.png": "65b513b44b2fc82fcbaa25f51fc45ca1",
"splash/img/light-3x.png": "8cbf430336eaebde50718a7f3f219134",
"splash/img/light-4x.png": "4ed9c521202fcc9b06421d5d54ea3165",
"ter%20main": "d6b80729c2b609b073470490b967edf2",
"version.json": "754f8e1bbad7fe3b376fb0ebe2b0c49c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
