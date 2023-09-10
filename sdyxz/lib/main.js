(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // sdyxz/lib/main.jsx
  var import_react_18_2 = __toESM(__require("https://esm.sh/react@18.2.0"));
  var import_client = __toESM(__require("https://esm.sh/react-dom@18.2.0/client"));

  // sdyxz/lib/contents/bab1.md.js
  var import_jsx_runtime = __require("https://esm.sh/react@18.2.0/jsx-runtime");
  function _createMdxContent(props) {
    const _components = Object.assign({
      h1: "h1",
      table: "table",
      thead: "thead",
      tr: "tr",
      th: "th",
      tbody: "tbody",
      td: "td",
      img: "img",
      em: "em",
      h2: "h2",
      p: "p",
      a: "a",
      strong: "strong",
      sup: "sup",
      hr: "hr",
      section: "section",
      ol: "ol",
      li: "li"
    }, props.components);
    return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: [(0, import_jsx_runtime.jsx)(_components.h1, {
        children: "Bab 1"
      }), "\n", (0, import_jsx_runtime.jsxs)(_components.table, {
        children: [(0, import_jsx_runtime.jsx)(_components.thead, {
          children: (0, import_jsx_runtime.jsxs)(_components.tr, {
            children: [(0, import_jsx_runtime.jsx)(_components.th, {
              align: "center"
            }), (0, import_jsx_runtime.jsx)(_components.th, {
              align: "left"
            })]
          })
        }), (0, import_jsx_runtime.jsx)(_components.tbody, {
          children: (0, import_jsx_runtime.jsxs)(_components.tr, {
            children: [(0, import_jsx_runtime.jsx)(_components.td, {
              align: "center",
              children: (0, import_jsx_runtime.jsx)(_components.img, {
                src: "https://res.cloudinary.com/drzjshskk/image/upload/e_contrast:85,q_auto:best/v1676662508/sdyxz/originals/ch01_qqa6or.jpg",
                alt: "Insiden Di Tengah Badai Salju"
              })
            }), (0, import_jsx_runtime.jsx)(_components.td, {
              align: "left",
              children: (0, import_jsx_runtime.jsx)(_components.em, {
                children: "Akhirnya si pendeta tertawa, mendadak telapak kanannya menghantam pegangan tombak dengan kecepatan seperti angin. Yang Tiexin merasa pangkal jempol dan telunjuknya mati rasa, dan dengan segera ia melepaskan tombak ke tanah yang diselimuti salju."
              })
            })]
          })
        })]
      }), "\n", (0, import_jsx_runtime.jsx)(_components.h2, {
        children: "Insiden Di Tengah Badai Salju"
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Di masa itu, di dekat kota Lin'an, sebelah Timur wilayah Jin, dua orang pemuda\nyang bersahabat karib sedang minum arak sambil menikmati cerita rakyat di sebuah\nkedai, di pinggiran kota."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Pemuda pertama bertubuh tinggi dan sangat kekar seperti seorang militer,\nmatanya lebar dengan sepasang alis tebal, ia bernama Guo Xiaotian.\nPemuda lainnya yang bernama Yang Tiexin terlihat lebih halus, dengan\nwajah putih dan tampan."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Salah satu hiburan rakyat di masa itu adalah mendengarkan cerita yang dilatar belakangi\nalunan musik di salah satu kedai sambil menikmati makanan dan minuman yang tersedia.\nSaat itu mereka sedang mendengarkan kisah sedih mengenai seorang Nona Yie yang tewas\nsecara mengenaskan dalam upaya mempertahankan kehormatannya, di tangan seorang perwira\ndari bangsa Jin yang saat itu sedang menguasai wilayah Utara Song."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Saudara-saudara," katanya. "Sekarang ini bangsa Jin sudah menguasai setengah\ndari Negeri Song kita. Mereka membunuh, memperkosa, merampok, dan mengambil tanah-tanah\nkita. Hampir tidak ada kejahatan yang tidak mereka kerjakan. Tapi ternyata pemerintah Song\ngagal mengambil tindakan apapun. Rakyat menderita tanpa perlindungan. Pemerintah kita yang\nharus disalahkan karena gagal melindungi rakyatnya sendiri. Ada banyak cerita seperti\nkisah tentang Nona Yie. Nama saya Zhang Shiwu, terima kasih untuk perhatian Anda semua\nmendengarkan cerita saya."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Yang Tiexin dan Guo Xiaotian sangat tertarik mendengar cerita Zhang Shiwu, dan akhirnya\nmereka pun mengambil kesempatan untuk berkenalan. Mereka bertiga akhirnya terlibat\npembicaraan akrab sambil minum arak dan menikmati makanan ringan di kedai itu."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Mendengar logat kalian, kedengarannya seperti dari wilayah Utara ya?" tebak Zhang Shiwu.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Yang Tiexin membenarkan dugaan itu, dan mengatakan bahwa mereka berdua datang dari\npropinsi Shandong. Mereka pindah ke Lin'an karena tidak tahan melihat ulah para\nperwira Jin di wilayah Utara, dan akhirnya memilih untuk pindah ke daerah yang\nlebih aman seperti Desa Niu (Kerbau) ini. Mereka sedang berpikir, apakah Jin\nakan menyerang ke Selatan. Akhirnya karena melihat luasnya pengetahuan Zhang Shiwu,\nmereka pun melontarkan pertanyaan ini."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: `"Emas dan perak berlimpah di wilayah kita, selain juga dipenuhi oleh wanita cantik."
kata Zhang Shiwu. "Siapa yang tidak ingin menguasai daerah yang begitu kaya?
Tapi sebenarnya keputusan apakah Jin akan menyerang Song ataukah tidak, bukan
terletak di tangan bangsa Jin, tapi ada di tangan para pejabat Song di wilayah Lin'an ini!"`
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Yang Tiexin dan Guo Xiaotian saling pandang dengan heran."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Kenapa begitu?" tanya keduanya, hampir bersamaan.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Kita bangsa Song jauh lebih banyak dari Jurchen, boleh dibilang seratus banding satu." lanjut Zhang Shiwu.\n"Kalau seratus orang kita melawan satu orang mereka, mana mungkin mereka bisa menang?\nKalau saja para pejabat teras Kekaisaran mulai memakai orang yang jujur dan setia,\nmana mungkin bangsa Jin menang melawan kita. Mulai dari jaman Hui Zong, Qin Zong,\ndan Gao Zong, boleh dibilang setengah wilayah Utara Negeri Song diserahkan secara\ncuma-cuma kepada bangsa Jin. Ketiga kaisar itu, mempercayai para pejabat korup yang\nmenggerogoti negara, menindas rakyat, dan juga karena persaingan politik akhirnya\nmembunuh para jendral setia yang melawan bangsa Jin. Tentu saja bangsa Jin sangat\nsenang melihat ini, dan jajaran pemerintahan selanjutnya masih terus melanjutkan\nkebijakan seperti ini sampai sekarang. Kalau begini ya sama saja dengan mengundang\nbangsa Jin untuk datang. Mana mungkin mereka menolak kesempatan emas seperti sekarang?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Zhang Shiwu menggelengkan kepala mengakhiri uraiannya."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Kedua kaisar Qin Zong dan Gao Zong adalah saudara seayah berlainan ibu, mereka berdua\nsama-sama anak dari Kaisar Hui Zong. Qin Zong lebih dahulu bertahta sebagai Kaisar."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Pada tahun 1127 ketika bangsa Jin menyerang Song, Gao zong sedang tidak ada di ibukota,\ndan akhirnya Jin berhasil menaklukkan ibukota. Untuk menghindari kejaran Jin, akhirnya\nGao Zong melarikan diri ke Selatan, dan sampai ke Lin'an. Ia kemudian mengambil alih tahta\ndan memulihkan pemerintahan Song di wilayah Selatan setelah berhasil mengumpulkan\nkekuatan militer berdasarkan para prajurit yang melawan bangsa Jin."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Ia sempat mengalami periode pemberontakan sampai turun tahta pertama kali ketika pengawal\nistana Miao Fu (\u82D7\u5085) dan Liu Zhengyan (\u5289\u6B63\u5F65) merasa tidak puas atas keputusan\nyang dibuatnya, yang menimbulkan kerugian atas keduanya."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Pejabat korup yang disinggung dalam uraian Zhang Shiwu sebelumnya adalah Qin Hui,\nyang pada tahun 1138 diberi tugas untuk bernegosiasi dengan bangsa Jin di wilayah\nUtara Song. Hasil negosiasi tersebut dikritik dengan nada keras oleh Yue Fei, Han Shizhong,\ndan beberapa pejabat lain. Untuk melindungi posisinya, Qin Hui kemudian menyingkirkan\npara saingan politiknya, dan meneruskan negosiasi damai tersebut menurut idenya sendiri."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Gao Zong akhirnya melihat bahwa kalau usaha Yue Fei dalam merebut kembali wilayah\nSong dari bangsa Jin sampai sukses, maka Kaisar sebelumnya, yaitu Qin Zong, akan\nkembali bertahta, karena itu ia tidak ingin mereka sukses. Pikiran ini sejalan dengan\napa yang ada di benak Qin Hui. Karena itulah mereka lebih memilih negosiasi damai.\nAkhirnya Gao Zong pun mengirimkan perintah kepada Yue Fei untuk menarik mundur pasukan."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Ketika melihat perintah tersebut, Yue Fei menangis dan berkata, "Perjuangan keras\nselama 30 tahun berakhir dengan sia-sia."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Karena putra tunggal Gao Zong, yaitu Zhao Fu (\u8D99\u65C9), meninggal di usia 2 tahun,\nakhirnya Gao Zong mengadopsi saudara sepupu jauhnya, yaitu Zhao Bocong (\u8D99\u4F2F\u742E),\nsebagai anaknya. Melalui beberapa proses yang agak rumit, dan beberapa kali ganti nama,\nakhirnya Zhao Bocong menjadi calon pewaris tahta dengan nama Zhao Shen (\u8D99\u7718)."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Gao Zong sendiri akhirnya memilih untuk pensiun sebagai kaisar di masa tuanya,\ndan Zhao Shen naik tahta sebagai Kaisar Xiao Zong. Mulai dari Gao Zong, Kekaisaran\nSong hanya tinggal separuh wilayah mereka yang sebenarnya, dan ibukota berpindah ke Lin'an."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Ketika Guo Xiaotian, Yang Tiexin, dan Zhang Shiwu sedang berbicara santai di kedai\nitu, Kaisar Ning Zong sedang berkuasa di Song Selatan, dan bangsa Jin masih terus\nmengganggu wilayah mereka dari waktu ke waktu. Lin'an yang dipilih sebagai ibukota\nSong Selatan, sebenarnya berada cukup dekat dengan daerah Selatan wilayah yang dikuasai\noleh Jin. Karena itulah gangguan dari para tentara Jin sangat terasa bagi rakyat."
      }), "\n", (0, import_jsx_runtime.jsxs)(_components.p, {
        children: ['Zhang Shiwu melanjutkan, "Kalau kita pikir lagi ke belakang, Hui Zong dan Qin Zong\nsudah siap untuk hidup abadi sebagai semacam dewa, mereka dikelilingi oleh para penjilat\nkorup yang hanya menggerogoti negara semacam Zai Jing dan Wong Yu, mereka hanya tahu\nbagaimana cara menaikkan pajak, yang hanya menambah kesengsaraan rakyat. Tong Guan dan Liang Shichen\nhanya kasim, mereka cuma tahu cara menjilat. Gao Qiu dan Li Bangyan hanya tahu cara\nmenipu dan mencari perempuan untuk menyenangkan Kaisar. Sang Kaisar sama sekali tidak\nmengurus urusan negara. Kalau bukan mencari tuntunan dari para biksu, dia pasti\njalan-jalan sambil mencari batu antik yang mahal. Begitu orang Jin datang, ia langsung\nketakutan seperti kura-kura, cari tempat persembunyian, lalu mewariskan tahta kepada\nputranya, Qin Zong. Saat itu Li Gang melawan bangsa Jin, tapi di luar dugaan, ternyata\nQin Zong lebih mempercayai gosip yang diedarkan para pejabat korup, dan malah memecat Li Gang.\nLebih dari itu, ia bukan mengganti Li Gang dengan jendral yang lebih baik, dan malah\nmengangkat seseorang yang mengaku sebagai ', (0, import_jsx_runtime.jsx)(_components.em, {
          children: "Utusan Para Dewa"
        }), ", Gao Zong, dan menyuruhnya\nuntuk mengirim ", (0, import_jsx_runtime.jsx)(_components.em, {
          children: "Balatentara Surga"
        }), ' untuk mempertahankan kota. Tapi Balatentara Surga\nini ternyata tidak muncul. Terus bagaimana kita bisa mempertahankan ibukota? Katakanlah\nakhirnya Hui Zong dan Qin Zong ditawan oleh Jin, mereka memang pantas mendapat hukuman\nseperti itu. Tapi bagaimana dengan jutaan rakyat Song? Mereka tidak melakukan apa pun\nyang pantas dihukum seperti tindakan tentara Jin ini."']
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Pada saat Xiao Zong bertahta, Gao Zong sudah pensiun sebagai kaisar, dan ia masih tetap hidup\ndi istana dengan gelar Taishang Huang."
      }), "\n", (0, import_jsx_runtime.jsxs)(_components.p, {
        children: ["Setelah Zhao Shen bertahta sebagai Kaisar Xiao Zong, sebenarnya ia melakukan beberapa\nperubahan penting untuk memperbaiki keadaan. Ia menyingkirkan sisa-sisa pejabat\nseperti Qin Hui dan komplotannya secara bertahap dari pemerintahan, dan secara\notomatis menstabilkan perekonomian negara. Ia juga melakukan pendekatan dengan\npara saudagar dari Arab dan India untuk melakukan ", (0, import_jsx_runtime.jsx)(_components.em, {
          children: "trading"
        }), ", dengan demikian membuka\nterobosan dalam perekonomian rakyat. Pengaruh Islam dan Hindu secara otomatis ada\ndi era pemerintahan Xiao Zong."]
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Tetapi orang-orang semacam Zhang Shiwu, yang sudah terlanjur bersimpati kepada Yue Fei\ndan jajarannya di era sebelumnya, dan juga merasakan sendiri penindasan yang terjadi\nsebagai akibat dari berkuasanya bangsa Jin di wilayah mereka, tentu saja gagal melihat perubahan\nyang terjadi, karena memang belum cukup signifikan untuk melindungi rakyat Song dari\nkemungkinan serbuan musuh. Tambahan lagi, era di mana mereka hidup saat itu sudah cukup jauh\ndari era Kaisar Xiao Zong sendiri."
      }), "\n", (0, import_jsx_runtime.jsxs)(_components.p, {
        children: ["Uraian Zhang Shiwu juga menyinggung soal ", (0, import_jsx_runtime.jsx)(_components.a, {
          href: "#insiden-jingkang",
          title: "Peristiwa ditawannya 2 kaisar Song",
          children: "Insiden Jing Kang"
        }), ",\nyang tentu saja sudah diketahui oleh Guo Xiaotian dan Yang Tiexin, dari cerita-cerita yang\nberedar secara turun-temurun. Cerita tersebut akan terus berlanjut selama berabad-abad,\ndan akhirnya menjadi bagian dari sejarah sampai saat ini dengan Jendral Yue Fei\nsebagai tokoh sentral."]
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Guo Xiaotian dan Yang Tiexin merasa gusar mendengar uraian Zhang Shiwu, semakin\nmendengar mereka semakin marah, terutama sekali ketika sampai pada cerita tentang\ndieksekusinya Jendral Yue Fei."
      }), "\n", (0, import_jsx_runtime.jsxs)(_components.p, {
        children: ['"Kami memang sudah pernah dengar cerita ini," kata Guo Xiaotian. "tapi sebelumnya\nkami agak ragu apa mungkin hal semacam ini ', (0, import_jsx_runtime.jsx)(_components.em, {
          children: "memang sungguh"
        }), ' terjadi."']
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Semuanya memang benar." jawab Zhang Shiwu.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin menambahkan, "Sebetulnya saat itu Yue Fei pasti mampu menaklukkan wilayah\nyang dikuasai Jin tanpa masalah besar. Tapi pengkhianat Qin Hui maunya bernegosiasi\ndamai, dan Kaisar mendengarkan dia, sampai akhirnya Jendral Yue Fei tewas."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Insiden tersebut terjadi pada tahun 1127, dan tentu saja pada saat itu mereka berdua\nbelum dilahirkan. Zhang Shiwu menuangkan arak untuk mereka bertiga sambil melanjutkan\nkomentarnya, "Sayangnya kita semua terlambat 60 tahun dilahirkan."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Maksudnya?" tanya Guo Xiaotian.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Kalau tidak begitu, pastilah para pendekar seperti kalian akan sampai di sini dan\nmembunuh Qin Hui. Dan kita akan duduk di sini sambil minum darahnya, tidak perlu lagi\nminum arak dingin begini." kata Zhang Shiwu sambil tertawa.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Mereka tertawa terbahak-bahak membayangkan kejadian semacam itu."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Yang Tiexin melihat bahwa arak mereka sudah habis, ia lalu memesan lagi berikut\nsepiring besar kacang untuk menemani obrolan mereka. Pemilik kedai itu melayani pesanan\nmereka sendiri, kakinya cacat, dan ia harus berjalan dengan bantuan dua tongkat kayu\nsederhana."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Mereka masih terus bercanda sambil menertawakan lelucon tentang Qin Hui dan para\npejabat lain yang seperti dia ketika si pemilik kedai datang mengantarkan pesanan\narak dan kacang untuk mereka. Ketika mendengar obrolan tentang Qin Hui, si pemilik kedai\nitu mendengus."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Ada apa, Qu San?" kata Yang Tiexin sambil memandangnya. "Apa menurutmu kita salah\nkalau memaki-maki Qin Hui dan jajarannya?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Qu San, si pemilik kedai, menjawab, "Bagus, bagus! Tidak ada yang salah dengan makian itu.\nHanya saja, kudengar Qin Hui bukan bajingan utama dalam negosiasi damai keparat itu."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Ketiga tamunya agak terkejut, dan bertanya, "Kalau bukan dia, lalu siapa?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Qin Hui hanya seorang menteri." kata Qu San. "Mau berhasil atau tidak negosiasi\ndamai itu, dia akan tetap jadi menteri. Tapi jendral kesayangan kita, Yue Fei, hanya\ningin merebut kembali wilayah kita yang jatuh ke tangan Jin, dan juga membebaskan\nkedua kaisar Hui Zong dan Qin Zong dari tangan mereka. Lalu kalau upaya Yue Fei berhasil,\nmenurutmu bagaimana Kaisar Gao Zong akan mempertahankan tahtanya?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Begitu ia selesai bicara, ia memandang ke langit sambil melamun, agak susah payah\nberusaha berdiri tegak mengingat kakinya yang cacat. Melihat mukanya ia seharusnya\nmasih dua puluhan, tapi punggungnya agak bongkok, dan ada beberapa helai rambut putih\ndi kepalanya. Dari belakang ia terlihat seperti orang tua."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Zhang Shiwu sudah berusia lima puluhan, meskipun ia terlihat lebih muda dengan\npotongan tubuh yang kurus dan ramping. Ia saling pandang dengan kedua teman ngobrolnya\ndalam diam."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Itu betul sekali," katanya setelah beberapa saat. "Pandanganmu sangat tajam, Pak.\nBajingan sebenarnya dalam kasus tewasnya Yue Fei bisa jadi bukan Qin Hui, tapi adalah\nKaisar Gao Zong. Kok bisa-bisanya dia melakukan hal semacam ini."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Guo Xiaotian bertanya, "Masa dia sampai segitu tidak tahu malunya?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: `Zhang Shiwu menjawab, "Waktu itu Jendral Yue Fei baru mengalahkan pasukan Jin beberapa kali,
bersamaan dengan pemberontakan beberapa saudara kita dari Utara, kita sebetulnya
berhasil mendesak mundur pasukan Jin. Suku Tatar saat itu panik tidak tahu harus
berbuat apa, lalu tiba-tiba Gao Zong mengirimkan surat tanda menyerah kepada mereka,
dan meminta perundingan damai. Sudah pasti pihak Jin langsung kegirangan, tapi mereka
membalas pesan tersebut dengan begini: 'Tidak ada negosiasi damai kecuali Yue Fei dibunuh.',
karena itu Qin Hui lalu merancang rencana jahat dan membunuh Jendral Yue Fei. Ia tewas
pada tanggal 11 bulan sebelas di dekat Zhao Xing. Sebulan kemudian, perdamaian pun
disetujui. Perbatasan antara Song dan Jin diletakkan di Sungai Huai, dan Kaisar Gao Zong
memanggil dirinya sendiri sebagai bawahan dari Kaisar Jin. Menurutmu bagaimana cara
perjanjian damai itu ditulis?"`
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Tentunya dengan cara memalukan." kata Yang Tiexin.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Zhang Shiwu membenarkan, lalu ia menguraikan apa yang diketahuinya tentang\nisi surat balasan dari Gao Zong tersebut, lalu melanjutkan komentarnya, "Ini bukan hanya\nmenjual dirinya sendiri sebagai jongos bangsa Jin, bahkan juga semua keturunannya. Sebetulnya\ntak jadi soal dia mau jadi jongos atau apa, tapi bagaimana dengan kita semua? Apa ini\nbukan sama saja bilang bahwa kita juga jongos?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Guo Xiaotian menggebrak meja dengan begitu kerasnya, sampai arak di cawan mereka\ntumpah membasahi meja. Ia berteriak dengan emosi, "Memalukan! Bagaimana bangsat seperti ini\nbisa jadi kaisar kita!"'
      }), "\n", (0, import_jsx_runtime.jsxs)(_components.p, {
        children: ['"Semua orang Song yang mendengar cerita ini ya pasti akan marah," kata Zhang Shiwu.\n"Mereka yang tinggal di sebelah Utara Sungai Huai adalah yang paling berduka ketika\nmenyadari bahwa negeri kita tidak lagi utuh. Gao Zong, setelah tahu bahwa kursinya\naman, lalu menghadiahkan tanda jasa untuk ', (0, import_jsx_runtime.jsx)(_components.em, {
          children: "pelayanannya"
        }), ". Qin Hui sudah punya gelar\nLord dari Lu, dan Gao Zong menambahkan gelar ", (0, import_jsx_runtime.jsx)(_components.strong, {
          children: "Grand Marshal"
        }), ' yang hanya sedikit di bawah\nkaisar kepada dirinya."']
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Xiao Zong menggantikan Gao Zong, dan Guang Zong menggantikan Xiao Zong, selama mereka\nberkuasa bangsa Jin masih menguasai wilayah Utara negeri kita. Sekarang Ning Zong naik tahta,\ndan kalau dihitung-hitung sudah berjalan 5 tahun sampai saat ini." lanjut Zhang Shiwu.\n"Ia boleh dibilang hanya mengikuti semua pendapat Penasihat Agung Han Tuozhou. Masa depan\nakan seperti apa, sulit diperkirakan, sulit...!"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Sambil bicara ia terus menggelengkan kepalanya."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: (0, import_jsx_runtime.jsx)(_components.a, {
          href: "https://youtube.com/clip/UgkxVA6xG-NgdbtBejjl2PM8vtE5jMRvAeqc",
          children: "Cuplikan adegan ini dari Youtube"
        })
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: `"Apanya yang sulit?" kata Guo Xiaotian, agak emosi. "Ini daerah pinggiran, bukan
Lin'an. Tidak ada yang akan memenggal kepalamu. Tidak ada orang di dunia yang tidak
menjuluki Han Tuozhou bajingan! Kalau kita lihat caranya mengkhianati negara dan
menekan rakyat, dia boleh dibilang saudara angkat Qin Hui!"`
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Sebetulnya di jaman itu yang berkembang adalah Neo Konfusianisme, tetapi sejauh ini\nKaisar Ning Zong sendiri agak alergi kepada Neo Konfusianisme. Akhirnya ia melarang\npraktek ajaran ini. Lebih buruk lagi, Ning Zong juga tidak suka membicarakan urusan\nstrategi perang apapun. Justru Han Tuozhou yang terus-menerus berusaha menyodorkan\nisu mengenai perang untuk menyingkirkan Jurchen, tetapi perhatian utama Ning Zong adalah\ntentang inflasi yang membumbung tinggi dan mengancam perekonomian. Dalam hal perang\nmelawan Dinasti Jin yang berkuasa di Utara, kebijakan Han Tuozhou justru sangat agresif."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: `Karena sekarang mereka membicarakan isu politik terkini, Zhang Shiwu terlihat mulai
takut, tidak lagi seperti sebelumnya. Sambil menuangkan arak untuk mereka bertiga,
ia bicara dengan hati-hati, "Terima kasih untuk arak ini, saudara-saudaraku. Kalau boleh
aku ingin menawarkan sedikit nasehat, sebaiknya kita lebih bijaksana dalam kata dan
tindakan, untuk menghindari kesulitan yang tidak perlu. Sampai di sini, kebanyakan
dari kita hanyalah rakyat biasa, kita hanya bisa mengikuti arus dan berusaha melakukan
yang terbaik untuk bertahan hidup. Aih! Seperti pepatah yang berbunyi: 'Dikelilingi
pegunungan di dalam gedung, danau di daerah Barat akhirnya mengalir kemana? Keharuman
Selatan memabukkan semua orang, dengan senang hati menerima Hangzhou sebagai Bianliang!'"`
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin bertanya, "Apa arti sajak itu?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Tidak ada yang istimewa." jawab Zhang Shiwu. "Hanya mengatakan bahwa para pejabat\ndi negeri kita hanya ingin berpesta dan minum-minum di tepi danau Barat. Mereka ingin\nmembayangkan bahwa Hangzhou adalah ibukota kita, dan tidak mau repot berusaha kembali\nke Bianliang."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Ketika mereka akhirnya berpisah, Zhang Shiwu sangat mabuk. Ia terus mengoceh tentang\nBianliang, Insiden Jing Kang, dan kesengsaraan rakyat."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Yang Tiexin membayar makanan dan minuman mereka, lalu mengajak Guo Xiaotian pulang. Mereka\nberdua bertetangga. Hanya jalan sedikit mereka pun sampai di rumah."
      }), "\n", (0, import_jsx_runtime.jsxs)(_components.p, {
        children: ['Istri Guo Xiaotian, Li, sedang mengejar ayam. "Kalian berdua pasti pergi minum-minum lagi ya?\nYang ', (0, import_jsx_runtime.jsx)(_components.a, {
          href: "#xiongdi",
          title: "Adik laki-laki",
          children: "Xiongdi"
        }), ', kenapa tidak kau ajak istrimu kesini\nuntuk makan bersama, hari ini kita akan masak ayam."']
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin tertawa, "Baiklah! Rasanya kami berdua akan mengganggu kalian lagi. Kami\nsebetulnya punya banyak ayam dan bebek, tapi kami tidak tega berpisah dengan mereka\nsemua."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Li menanggapi, "Istrimu itu terlalu baik. Dia bilang dia yang merawat ayam dan bebek itu\nsejak mereka semua masih bayi, gimana bisa tega membunuh mereka."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin tertawa lagi, lalu menjawab, "Aku pernah bilang aku yang akan membunuh\nmereka kalau dia tidak bisa, tapi dia lalu mulai menangis. Aih! Aku bisa berbuat apa?\nGini saja, aku akan pergi berburu di hutan, besok malam aku yang undang kalian ke rumah."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Guo Xiaotian memotongnya, "Kita sekeluarga. Hentikan omongan soal siapa mengundang siapa\ndiundang. Malam ini kita berburu bersama."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Tengah malam itu mereka berdua pergi ke hutan di sebelah Barat perkampungan itu,\ndan berharap untuk menemukan babi hutan atau binatang lainnya yang enak dimakan. Tapi\nsetelah menunggu dua jam ternyata mereka tidak mendengar apa-apa. Lalu tiba-tiba\nmereka mendengar suara logam beradu. Mereka saling bertukar pandang. "Nah, apa itu?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Dari kejauhan terdengar suara beberapa orang, "Hei, kau mau kemana? Berhenti!"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Lalu sebuah bayangan melompat ke dalam hutan. Di bawah sinar bulan Guo Xiaotian dan Yang Tiexin\nbisa melihat orang itu. Mereka berdua terkejut. Ternyata orang itu cacat, dan dia adalah\nsi pemilik kedai minum, Qu San. Ia menghentakkan tongkat kirinya ke tanah, dan melompat\nke pepohonan, memperlihatkan ilmu Qing Gong yang tinggi. Guo Xiaotian dan Yang Tiexin bertukar pandang lagi, mereka terpana."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Tak disangka kungfu Qu San bisa setinggi ini." pikir mereka. Dan mereka sudah tinggal\ndi daerah itu selama tiga tahun. Mereka berusaha tetap diam di semak-semak, tidak berani\nbersuara.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Akhirnya muncul tiga orang lain. Mereka saling berbisik dan berjalan masuk ke hutan.\nMereka bertiga berpakaian militer dan masing-masing memegang golok. Salah satunya\nmembentak, "Pincang keparat! Bapakmu ada di sini, cepat keluar dan menyerah!"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Mereka mengayun-ayunkan golok dengan liar, memotong benda apapun di sepanjang jalan.\nQu San tetap diam di balik pohon. Mereka terlihat semakin mendekat. Tiba-tiba terdengar suara\ngebukan. Qu San menyodokkan tongkat kanannya dan mengenai salah seorang prajurit itu\ntepat di dadanya. Orang itu mengeluh sebelum melayang ke belakang dan jatuh ke tanah."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Kedua orang lainnya mulai mengepung Qu San. Terjadi perkelahian seru. Kungfu para prajurit\nitu kelihatannya juga tidak buruk. Qu San meladeni mereka dengan menggunakan salah\nsatu tongkatnya saling bergantian. Meskipun ia hanya bisa menggunakan satu tongkat,\nsementara tongkat lain dipakai untuk menyanggah tubuhnya, ia tidak terlihat kalah."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Guo Xiaotian dan Yang Tiexin melihat ada bungkusan besar di punggung Qu San, kelihatannya\ncukup merepotkan. Setelah bertarung beberapa jurus, akhirnya salah satu golok mendarat\ndi punggung Qu San dan merobek bungkusan tersebut hingga isinya tumpah ke tanah. Salah satu\nprajurit itu sempat menengok untuk mengamati apa yang jatuh. Qu San mengambil kesempatan\npada saat ia lengah, dan tongkatnya menghantam dengan keras ke batok kepala orang itu.\nIa pun roboh tanpa banyak bersuara. Satu orang lainnya terlihat ketakutan, ia berbalik\nlalu melarikan diri."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Qu San merogoh saku baju di dadanya, lalu dengan cepat mengangkat tangannya. Sebutir benda\nbulat melayang secepat kilat di bawah sinar bulan menuju kepala orang itu dan menghantamnya.\nSi prajurit malang itu menjerit dan menjatuhkan goloknya, lalu tangannya terayun-ayun\ndengan liar tak terkendali. Tak lama kemudian ia jatuh ke tanah, berkelojotan sejenak,\nlalu tidak bergerak lagi."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Guo Xiaotian dan Yang Tiexin barusan melihat Qu San membunuh tiga orang berturut-turut,\ndan memamerkan kungfu di tingkat yang belum pernah mereka lihat. Jantung mereka berdetak\nkencang. Mereka berpikiran sama. "Dia barusan membunuh tiga orang prajurit kekaisaran,\nini kejahatan besar. Kita tidak bakalan bisa melawan kalau tetap di sini dan dia sampai\nmenemukan kita berdua, lalu bermaksud membunuh kita untuk menutup mulut."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Qu San berpaling ke arah mereka, lalu berkata pelan, "Guo Xiongdi, Yang Xiongdi, kalian\nbisa keluar sekarang."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Mereka berdua keluar dari semak-semak setelah menenangkan hati. Tidak ada pilihan lain\nsekarang, meskipun mereka berdua masing-masing memegang sebuah penggaruk rumput. Yang\nTiexin melirik Guo Xiaotian dan penggaruk rumput di tangannya, lalu maju dua langkah\nke depan."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Qu San tersenum ringan. "Yang Xiongdi," katanya kepada Yang Tiexin. "Ilmu tombak\nkeluarga Yang (Yang Jia Qiang Fa) bisa diterapkan menggunakan sebuah penggaruk rumput,\ntapi saudara angkatmu memakai sepasang tombak pendek, dan sepertinya penggaruk rumput\ntidak cocok untuk itu. Karenanya kau yang maju ke depan. Benar-benar terpuji..."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Yang Tiexin mendengar Qu San bicara terang-terangan membongkar apa yang ada di benaknya,\ndia merasa ditelanjangi, dan seketika itu tidak tahu harus berbuat apa."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Qu San melanjutkan, "Katakanlah seandainya Guo Xiongdi sekarang ini memegang sepasang\ntombak pendek itu. Menurutmu kalian berdua bisa mengalahkan aku?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Guo Xiaotian menggelengkan kepalanya. "Tidak bisa. Kami berdua buta, tinggal sekampung\nsekian lama masih tidak tahu kalau kau punya kungfu, dan bahkan seorang jagoan."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Qu San menggeleng. "Aku orang cacat, bagaimana bisa jadi jagoan." Dan ketika semangatnya\nmemudar, ia melanjutkan. "Waktu kakiku masih berfungsi, apa aku sampai serepot ini\nhanya untuk menghadapi beberapa pengawal bersenjata. Aih! Aku sekarang tidak berguna.\nTidak berguna!"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Guo Xiaotian dan Yang Tiexin saling melirik. "Apa kalian berdua bisa bantu aku\nmengubur tiga orang ini?" tanya Qu San.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Baiklah!" kata Yang Tiexin.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Mereka berdua menggali kuburan untuk ketiga prajurit itu dengan menggunakan penggaruk\nrumput. Ketika mengangkat tubuh orang terakhir, Yang Tiexin melihat benda hitam yang\nsebelumnya dilontarkan Qu San masih tertancap di kepala orang itu. Ia mencabutnya\ndengan hati-hati. Senjata itu berbentuk 8 Diagram, dan terbuat dari besi. Ia lalu\nmengembalikan benda itu kepada Qu San."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Qu San menerimanya sambil berkata, "Maaf aku merepotkan kalian." Ia memasukkan benda\nitu kembali ke sakunya, lalu mulai memungut semua isi bungkusan yang sebelumnya ada\ndi punggungnya dari tanah.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Yang Tiexin selesai menguruk tanah untuk menutup kuburan. Ia mulai mengamati benda-benda\nyang sekarang terhambar di tanah, beralaskan bungkusan Qu San. Ada tiga gulung lukisan,\nlalu beberapa barang berharga yang terbuat dari emas dan perak. Qu San mengambil dua\nbarang berharga, lalu memberikannya kepada Guo Xiaotian dan Yang Tiexin."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Ini semua aku curi dari istana," katanya. "Kaisar sudah melakukan terlalu banyak\nkejahatan yang menyengsarakan rakyat. Mengambil sedikit barang yang dia curi dari kita\nkurasa juga bukan sebuah kejahatan. Anggaplah ini hadiah dari aku."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Mereka berdua saling pandang sambil melongo, tidak ada yang berani menerima hadiah itu."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Qu San menatap keduanya dengan serius. "Kenapa? Kalian takut, apa tidak mau?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Kami berdua tidak melakukan apapun yang layak untuk menerima hadiah itu, jadi\ntidak bisa menerimanya." kata Guo Xiaotian. "Soal apa yang terjadi malam ini, jangan\nkuatir, saudaraku. Kami berdua tidak akan membocorkan rahasia ini."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Hmm," Qu San bergumam. "Kenapa aku harus takut kalian membocorkan rahasia? Aku sudah\ntahu kalian siapa. Guo Xiongdi, kau adalah keturunan dari Guo Sheng, pendekar dari gunung Liang.\nKau memakai ilmu tombak keluargamu, tapi tombakmu pendek, dan bukan tombak panjang,\ndan punya dua mata pisau, bukan hanya satu. Yang Xiongdi, kau salah satu keturunan\ndari Yang Zaixin, salah satu jendral yang jadi bawahan Yue Fei. Kalian berdua keturunan\ndari dua pahlawan besar, ketika bangsa Jin menyerang ke Song Utara, kalian saling mengangkat\nsaudara, lalu bertualang ke rimba persilatan. Kalian lalu pindah kemari bersama-sama. Sejauh\nini benarkah?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Guo Xiaotian dan Yang Tiexin tahu kalau Qu San sudah meneliti riwayat mereka berdua,\ndan tidak ada gunanya juga disembunyikan. Akhirnya mereka tertawa senang, lalu tak lama kemudian\nterlibat pembicaraan lebih akrab. Ketika Qu San menanyakan apakah mereka masih menolak\nhadiahnya, mereka berdua merasa tidak ada gunanya juga menolak, yang bahkan bisa bikin\nQu San tersingggung. Jadi akhirnya hadiah itu mereka terima."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Qu San sempat menyinggung bahwa hari ini ia berhasil mencuri 2 lukisan karya Kaisar\nDao Jun, satu karya kaligrafinya. Ia merasa sangat senang waktu mengatakannya.\nWaktu mereka akan berpisah Yang Tiexin sempat menanyakan bahwa kalau sebelumnya Qu San\nsempat menyinggung sebagian besar wilayah Song hilang gara-gara kaisar, lalu apa yang\nberharga dari lukisannya? Kenapa ia harus repot-repot menyelundup ke istana untuk\nmencurinya."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Ada sesuatu yang tidak kalian pahami di sini," kata Qu San.'
      }), "\n", (0, import_jsx_runtime.jsxs)(_components.p, {
        children: ['"Kalau kaisar bisa melukis dan menulis seindah itu, pastilah ia bukan orang bodoh."\nkata Guo Xiaotian. "Dulu waktu aku masih kecil, ayahku pernah bilang bahwa seseorang harus\nberusaha melakukan ', (0, import_jsx_runtime.jsx)(_components.em, {
          children: "satu"
        }), ' hal dengan konsentrasi penuh, apapun juga itu. Kalau orang\nmelakukan sedikit ini, lalu sedikit itu, maka akhirnya ia akan gagal menyelesaikan\napapun juga dalam hidupnya."']
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Qu San tersenyum. "Umumnya memang begitu, tapi di dunia ini ternyata ada seorang jenius\nyang bisa jadi ahli dalam beberapa hal sekaligus, mulai dari melukis, kaligrafi,\npengobatan, kungfu, taktik militer, permainan Go, astrologi, dan juga 5 elemen. Rasanya\ntidak ada hal yang tidak diketahuinya. Dan juga tidak ada hal yang tidak dia kuasai\ndengan baik. Tapi sayangnya, kalian berdua tidak punya kesempatan menemui orang ini."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Ia memandang ke bulan sambil melamun."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Malam itu Yang Tiexin dan Guo Xiaotian pulang ke rumah masing-masing, dan langsung\nmengubur kedua barang berharga dari emas itu di halaman mereka. Dan mereka bahkan tidak\nmenceritakan apa yang terjadi kepada istri mereka."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Selanjutnya mereka berdua masih tetap mengunjungi kedai minum Qu San, dan Qu San\njuga masih melayani mereka seperti biasa. Tetapi mulai saat itu setiap kali mereka\nmelihat Qu San duduk di dekat jendela sambil melamun, mereka memandangnya dengan\nkagum."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Tanpa terasa akhirnya tibalah musim salju. Saat itu Yang Tiexin bermaksud mengundang\nsuami-istri Guo untuk makan malam di rumahnya. Ia lalu pergi ke kedai arak Qu San dengan\nmaksud membeli 3 liter arak. Tapi ternyata Qu San tidak ada di tempat, dan kedai\ntersebut memang tidak dibuka. Waktu ia perhatikan lebih teliti, ternyata label nama\nkedai itu juga sudah diturunkan. Ia memang sudah beberapa hari tidak berkunjung kesitu,\ndan kelihatannya Qu San juga sudah beberapa hari pergi."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Ia pergi membeli semua keperluan makan malam di tempat lain yang sekitar 5 li lebih\njauh dari situ."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Istri Yang Tiexin bermarga Bao, dan bernama Xiruo, putri seorang guru di kampung itu.\nMereka sudah menikah kira-kira 2 tahun. Ia segera mengolah semua bahan yang dibeli\nsuaminya untuk makan malam, lalu pergi ke rumah keluarga Guo untuk mengundang mereka."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Guo Xiaotian sangat senang mendengarnya. Istrinya sedang kurang enak badan karena\nkehamilannya. Hari itu ia sudah beberapa kali muntah, jadi ia memutuskan untuk\ntidak ikut hari itu. Istri Guo Xiaotian bermarga Li dan bernama Ping. Ia dan Bao Xiruo\nsudah seperti saudara. Malam itu ia menyiapkan teh hangat untuk Li Ping, sebelum\nakhirnya pulang."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Begitu sampai di rumah, ternyata kedua suami mereka sudah duduk di meja makan, dan\nmulai menyantap makanan karena sudah tidak sabar menunggu dia pulang. Ia tersenyum\nsimpul. Di daerah itu mereka semua memang tidak terlalu ketat memperhatikan aturan\nmengenai pria dan wanita, dan lagi suaminya dan Guo Xiaotian adalah orang yang berpikiran\nterbuka, dan selalu bicara terus-terang. Jadi tanpa ragu ia lalu duduk di meja yang sama\ndan menambahkan arang untuk menghangatkan arak bagi mereka."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Setelah diperhatikan ternyata wajah kedua pria di hadapannya agak muram, kelihatannya\nmereka marah. Bao Xiruo lalu bertanya, "Ada apa? Kok kalian kelihatannya marah?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: `"Kami sedang bicara soal apa yang terjadi di istana Lin'an." jawab suaminya.`
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: `Guo Xiaotian menambahkan, "Kemarin kudengar cerita tentang si bangsat menteri Han Tuozhou.
kedengarannya juga tidak dibuat-buat. Mereka bilang kalau seseorang menyodorkan laporan,
dan kalau laporan itu tidak mengandung kalimat: 'Juga menitipkan ini... untuk Bapak Menteri.' maka
laporan itu tidak akan dilirik oleh Han Tuozhou."`
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Yang Tiexin kemudian menimpali dengan beberapa cerita lain yang didengarnya, tapi\ndengan kehadiran Xiruo akhirnya mereka bisa bercerita sambil tertawa. Di sana-sini\nBao Xiruo ikut menimpali anekdot tentang para pejabat itu dengan komentar-komentar\nyang memancing tawa."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Mereka bertiga minum arak sebentar sambil menikmati turunnya salju di luar, mereka\nmemang merasa agak dingin, tetapi arak yang sudah masuk ke perut membuat mereka merasa\ntetap hangat. Tiba-tiba dari arah Timur mereka mendengar suara langkah orang berlari,\ndan akhirnya mereka melihat seorang pendeta Tao."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Pendeta itu memakai sebuah topi anyaman dari bambu, tubuhnya sepenuhi butiran salju.\nAda sebuah pedang terselip di punggungnya, di gagang pedang itu terdapat jumbai kuning,\nyang melambai-lambai ditiup angin."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Di bawah langit yang penuh salju berdiri sosok seorang pria yang berjalan sendirian,\nsungguh pemandangan yang megah dan mempesona."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Guo Xiaotian bicara, "Pendeta itu bisa kungfu. Kelihatannya seperti seorang terhormat."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Betul!" kata Yang Tiexin. "Ayo kita undang dia, sekaligus berkenalan sambil minum-minum."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Saat itu Si Pendeta sudah berjalan kurang lebih 2 zhang dari tempat mereka (1 zhang\nkita-kira adalah 3,3 meter). Mereka berdua suka mencari kenalan baru dan berteman\ndengan siapa saja, karena itu mereka dengan segera menuju ke arah Si Pendeta. Kelihatannya\nQing Gong pendeta itu sangat bagus, meskipun dia hanya berjalan tetapi mereka harus\nberlari untuk mengejarnya."
      }), "\n", (0, import_jsx_runtime.jsxs)(_components.p, {
        children: ['"Dao Zhang', (0, import_jsx_runtime.jsx)(_components.sup, {
          children: (0, import_jsx_runtime.jsx)(_components.a, {
            href: "#user-content-fn-daozhang",
            id: "user-content-fnref-daozhang",
            "data-footnote-ref": true,
            "aria-describedby": "footnote-label",
            children: "1"
          })
        }), ', tolong berhenti!" panggil Yang Tiexin. "Cuaca begini buruk, kenapa\nDao Zhang tidak mampir dulu sambil minum-minum supaya lebih hangat."']
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Pendeta itu menengok, lalu mengejek. Dalam sekejap ia sudah berdiri di hadapan\nYang Tiexin. "Kau suruh aku berhenti, mau apa? Terus terang saja." katanya dengan\nnada dingin, mukanya agak muram.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Yang Tiexin merasa kekasaran pendeta itu agak sulit dimengerti, karenanya ia diam saja\ntidak menanggapi. Guo Xiaotian merangkapkan kedua tangannya untuk memberi hormat."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Kami berdua sedang duduk-duduk di dekat perapian sambil minum arak ketika Dao Zhang lewat.\nKarena itu kami memberanikan diri untuk mengundang Dao Zhang datang bergabung. Maafkan\nkami kalau Dao Zhang tersinggung." katanya dengan sopan.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Si Pendeta menjawab, agak lantang, "Baiklah, baiklah! Kau mau minum, mari kita minum!"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Caranya menjawab membuat Yang Tiexin lebih gusar, ia lalu mencekal pergelangan tangan\nsi pendeta sambil berkata, "Kau masih belum bilang siapa namamu."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Tiba-tiba Yang Tiexin merasa ia sedang memegang ikan yang licin, pergelangan tangan\nsi pendeta pun lolos. Yang Tiexin tahu bahwa ia dalam kesulitan, ia berusaha mundur.\nTapi sebelum ia melakukannya, ia merasa pergelangan tangannya sakit, si pendeta mencekalnya.\nRasanya seperti diborgol, ia merasakan tekanan berat dan juga hawa panas. Ia berusaha\nmeloloskan diri, tapi tangan kanannya terasa lemah, dan ia sangat kesakitan."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Guo Xiaotian bisa menilai dari mukanya yang merah bahwa saudaranya marah. Ia sendiri\nhanya ingin berkenalan, dan menghindari perseteruan dengan si pendeta, atau orang\nlain dari dunia persilatan. Ia berkata, "Dao Zhang, silakan duduk."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Si pendeta mengejek lagi beberapa kali, lalu melepaskan Yang Tiexin. Ia melangkah\nke tengah ruangan, lalu duduk di situ dengan sikap agak arogan. "Kalian berdua sudah\njelas berasal dari Shandong." katanya. "Tapi kalian di sini pura-pura jadi petani. Sayangnya\nlogat kalian tetaplah kentara dari Shandong. Bagaimana mungkin seorang warga biasa\nbisa ilmu silat."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Yang Tiexin merasa malu dan juga marah, ia melangkah ke belakang rumah. Ia mengambil\nbelati dan menyembunyikannya di balik baju. Lalu ia melangkah kembali ke ruang tamu.\nIa menuangkan tiga cawan arak, tapi kemudian meminum cawannya sendiri tanpa bicara."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Si pendeta hanya menatap salju di luar rumah dengan raut muka arogan, ia juga tidak\nbicara sama sekali, juga tidak minum araknya. Guo Xiaotian melihat bahwa si pendeta curiga\nbahwa ada sesuatu di dalam araknya. Ia lalu menenggak arak di cawannya dan berkata\ndengan nada ringan, "Arak cepat dingin. Biar kutuangkan satu lagi untuk Dao Zhang."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Ia menuang secawan arak lagi untuk si pendeta, yang dengan segera dihabiskan oleh\nsi pendeta dengan sekali tenggak, setelah itu ia berkata, "Meskipun ada obat bius\ndi dalam arak ini, tidak akan mempengaruhi aku."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Akhirnya kesabaran Yang Tiexin habis. "Kita bermaksud baik mengundang Dao Zhang datang\nuntuk minum bersama. Kenapa kami harus mencoba mencelakai Dao Zhang? Kalau kau terus\nbicara dengan nada begini, maka sebaiknya pergi sekarang! Kami bukannya kelebihan arak\njelek dan makanan busuk yang tidak bisa kami buang!"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Si Pendeta mengabaikannya, lalu membuka topinya dan melemparkannya ke lantai. Guo Xiaotian\ndan Yang Tiexin menatapnya dengan teliti. Pendeta itu kira-kira 30 tahunan. Mukanya kotak\ndan kemerahan, alisnya melengkung. Matanya bersinar cerah dan sangat tajam. Berikutnya\nia membuka bungkusan kulit di punggungnya, lalu melemparkannya ke atas meja."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Yang Tiexin dan Guo Xiaotian melompat kaget, ternyata isi bungkusan itu adalah kepala manusia.\nBao Xiruo menjerit ngeri dan berlari ke belakang rumah."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Si Pendeta menggoyangkan bungkusan itu dan mengeluarkan dua benda lagi dari dalamnya.\nIsinya jantung dan hati. Sudah jelas bukan hati dan jantung babi, ini organ dalam\nmanusia."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin merogoh bajunya untuk memastikan belatinya masih ada. "Pendeta bangsat!"\nia berteriak sambil mengeluarkan pisaunya dan menikam dada si pendeta.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Si Pendeta terkekeh, "Cakar Elang, jadi sekarang kau mau berkelahi ya?" Ia memukul\npergelangan tangan Yang Tiexin perlahan dengan tangan kirinya. Yang Tiexin merasa sakit\ndan tangannya mati rasa, jari-jarinya kehilangan tenaga. Sebelum ia sadar, pisaunya\nsudah berhasil direbut.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Guo Xiaotian terkesiap melihat semua itu. Ia tahu bahwa saudara angkatnya adalah\nketurunan pendekar tangguh, dan dalam setiap latihan yang mereka lakukan bersama ia\ntahu bahwa ia kalah sedikit dari saudaranya. Tapi kelihatannya saudaranya seperti\nbukan apa-apa dibandingkan si pendeta Tao. Gerakan yang baru dilakukannya tadi\nadalah 'Tangan Kosong Merebut Pisau' adalah sebuah jurus yang hanya pernah ia dengar\ndi dunia ini."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Ia dengan segera mengangkat bangku yang didudukinya, dan bersiap seandainya si pendeta\nbermaksud menikam saudaranya dengan belati tersebut. Tapi Si Pendeta hanya mengabaikan\nmereka berdua. Ia lalu memotong-motong jantung dan hati manusia di atas meja itu menjadi\nbeberapa bagian kecil. Tiba-tiba ia mengaum keras, begitu kerasnya sehingga menggetarkan\natap rumah. Ia mengangkat tangan kanannya, lalu menghempaskannya ke bawah dengan keras\nsehingga seluruh isi meja terpental. Kedua bersaudara itu terpana, si pendeta baru saja\nmenghantam tengkorak kepala manusia itu dan meremukkannya, bahkan bagian tengah meja ikut\nremuk."
      }), "\n", (0, import_jsx_runtime.jsxs)(_components.p, {
        children: ["Mereka berdua masih berusaha memulihkan diri dari ", (0, import_jsx_runtime.jsx)(_components.em, {
          children: "shock"
        }), ' ketika si pendeta berteriak\nkeras, "Bajingan tengik! Hari ini Pinto akan melanggar larangan membunuh!"']
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin begitu marahnya sampai tidak bisa bicara. Ia meraih tombaknya yang\ntersandar di sudut ruangan dan melompat keluar. "Ayo! Coba kau jajal Ilmu Tombak Keluarga Yang."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Si Pendeta terkekeh, "Kau pikir kau cukup layak memakai Ilmu Tombak Keluarga Yang,\nhanya karena kesombongan palsu begini?" Ia melangkah keluar begitu selesai bicara.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Melihat situasi memburuk, Guo Xiaotian segera pulang untuk mengambil sepasang tombak pendeknya.\nKetika ia kembali, ternyata si pendeta masig berdiri diam dengan pedang di tangan,\nmasih dalam sarungnya."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Hunus pedangmu!" bentak Yang Tiexin. Si Pendeta menjawab, "Meskipun kalian maju\nberdua, aku tetap akan memakai tangan kosong."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Yang Tiexin memberi tanda bahwa ia siap mulai, lalu langsung merangsek ke depan\ndengan jurus 'Naga Beracun Keluar dari Gua'. Rumbai merah di tombaknya bergetar,\nmeninggalkan bayangan merah menuju ke jantung si pendeta."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Si pendeta agak terkejut dan mamuji, "Bagus!" Tubuhnya bergerak mengikuti tombak,\nlalu menghindar ke arah kiri. Telapak kirinya berputar melingkar dan menyambut\nujung tombak untuk mencekalnya.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Yang Tiexin sudah melatih diri sejak kecil, dan ilmu tombaknya tidak bisa diremehkan.\nBeberapa tahun yang lalu, Yang Zaixin, leluhurnya, bersama dengan tiga ribu prajurit\nberperang melawan empat puluh ribu tentara Jin di Jembatan Saudagar Kecil. Dalam\npertempuran itu ia membunuh lebih dari dua ribu prajurit Jin, belum lagi satu komandan\ndari sepuluh ribu prajurit, dan juga seratus komandan dari seribu prajurit. Saat itu\nanak panah musuh datang bagaikan siraman air hujan, akhirnya kudanya terjebak di dalam lumpur,\ndan ia memberikan nyawanya bagi negara. Ketika balatentara Jin membakar jenazahnya,\njumlah total anak panah yang meleleh dari tubuhnya mencapai kira-kira 1 kg. Peperangan\nitu sangat mengerikan bagi tentara Jin, dan membuat Ilmu Tombak Keluarga Yang terkenal\ndi seluruh negeri."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Meskipun Yang Tiexin tidak setangguh para leluhurnya, namun saat itu ia berjuang mati-matian\ndengan segenap tenanganya, memperlihatkan tontonan yang luar biasa. Tapi setelah mengerahkan\nseluruh, 72 jurus dari ilmu tombaknya, akhirnya ia putus asa dan merasa sangat marah."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Ia memutar tubuh, lalu berjalan pergi sambil membawa tombaknya. Seperti yang sudah\ndiduga, Si Pendeta mengejarnya secepat kilat. Yang Tiexin membentak keras, memegang\ntombak dengan kedua tangannya, lalu tiba-tiba ia memutar tubuhnya sambil menusuk ke belakang\ntepat ke muka si pendeta. Ini gerakan yang sangat berbahaya. Dulu sebelum Yang Zaixin\nberubah aliansi ke Song, ia menggunakan jurus ini untuk melawan Yue Fei, dan ia berhasil\nmembunuh Yue Fan, adik kandung Yue Fei."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Ketika melihat tiba-tiba mata tombak sudah di depan hidungnya, Si Pendeta langsung\nmemuji, "Bagus sekali! Bagus!" Dengan menepuk kedua tangannya ia berhasil menjepit\nmata tombak. Yang Tiexin mendorong tombak dengan kuat, tapi ternyata tombak itu\nsama sekali tidak bergerak. Terkesiap, ia pun berusaha menarik kembali tombaknya\ndengan sekuat tenaga, tapi tombak itu seolah-olah tertimpa sebuah gunung, tanpa\ncelah sedikitpun untuk keluar. Mukanya memerah setelah berusaha menarik tiga kali\ndengan sia-sia.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Akhirnya si pendeta tertawa, mendadak telapak kanannya menghantam pegangan tombak\ndengan kecepatan seperti angin. Yang Tiexin merasa pangkal jempol dan telunjuknya\nmati rasa, dan dengan segera ia melepaskan tombak ke tanah yang diselimuti salju."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Si Pendeta tersenyum dan berkata, "Kau betul-betul menggunakan Ilmu Tombak Keluarga Yang.\nMaafkan aku kalau sempat bersikap kasar. Kalau boleh aku ingin tahu siapa namamu."'
      }), "\n", (0, import_jsx_runtime.jsxs)(_components.p, {
        children: ["Yang Tiexin masih belum pulih dari ", (0, import_jsx_runtime.jsx)(_components.em, {
          children: "shock"
        }), ', ia menjawab seenaknya. "Aku bermarga Yang,\nnamaku Tiexin."']
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Kau punya hubungan keluarga dengan Jendral Yang, Yang Zaixin?" tanya si pendeta.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Dia kakek buyutku," jawab Yang Tiexin.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Si Pendeta segera merangkapkan kedua tangannya untuk memberi hormat. "Kelihatannya aku\nsalah paham kepada kalian berdua. Tadinya kukira kalian bajingan, tidak tahunya keturunan\npatriot. Maaf. Boleh aku tahu juga nama sahabat ini?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Aku bernarga Guo, namaku Xiaotian," jawab Guo Xiaotian.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin menambahkan, "Dia saudara angkatku, juga keturunan pendekar Guo Sheng\ndari gunung Liang." Si Pendeta segera menanggapi, "Pendeta hina ini bersikap kasar\ndan terburu-buru, maafkan aku." Ia membungkuk sekali lagi.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Guo Xiaotian dan Yang Tiexin merangkap kedua tangan mereka dan balas menghormat.\n"Dao Zhang silakan masuk untuk menikmati tiga cawan lagi." Yang Tiexin dengan tenang memungut\nkembali tombaknya. Si Pendeta tersenyum, "Aku memang ingin minum dengan kalian."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Bao Xiruo kuatir suaminya terluka, tapi ketika melihat mereka bertiga sudah saling membungkuk\nuntuk saling memberi hormat dalam dama, ia merasa lega, dan membereskan meja supaya\nmereka bisa duduk ngobrol di situ."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Ketika ditanya soal namanya, Si Pendeta menjawab, "Namaku Qiu Chuji..."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin dan Guo Xiaotian terlompat dan berseru, "Ah ya!"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Qiu Chuji tersenyum."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: `"Pendekar 'Musim Semi Abadi' (Chang Chunzi) dari Perguruan Quanzhen, kami sangat senang berkenalan dengan Dao Zhang." kata
Guo Xiaotian. Ia berlutut bersama dengan Yang Tiexin untuk memberi hormat.`
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Qiu Chuji buru-buru membangunkan keduanya. "Aku hari ini telah membunuh seorang pengkhianat\ndengan tanganku sendiri." katanya. "Orang-orang istana sedang mengejar aku. Kalian\ntiba-tiba mengundang minum tanpa sebab. Ini ibukota, dan kalian bukan petani biasa.\nAku jadi langsung curiga."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Guo Xiaotian tertawa. "Saudaraku punya adat jelek. Sebelum kita masuk rumah dia sudah\nmenjajal Dao Zhang, kukira itu juga menambah kecurigaan Dao Zhang."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Qiu Chuji mengiyakan. "Kenapa petani biasa bisa begitu kuat. Tadinya kupikir kalian berdua\nanjing pemerintah yang sedang menyamar dan menungguku di sini. Makanya sikapku jadi\nkasar dan terburu-buru."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin tersenyum dan menjawab, "Itu tidak bisa disalahkan."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Setelah menenggak araknya beberapa kali, Qiu Chuji berkata sambil menuding kepala\nmanusia yang sekarang pecah berantakan. "Orang ini bernama Wang Daokun, seorang pengkhianat.\nTahun lalu ketika kaisar mengutusnya untu mengirimkan ucapan selamat ulang tahun\nkepada Kaisar Jin, ia mulai kolusi dengan Jin dengan rencana untuk menginvasi\nwilayah Song Selatan. Aku mengejarnya selama sepuluh hari sebelum berhasil membunuhnya."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Kedua bersaudara itu sudah pernah mendengar sepak terjang Qiu Chuji di dunia persilatan,\ndan hari ini setelah bertemu muka. mereka semakin kagum. Mereka mengambil kesempatan\nuntuk menanyakan hal-hal yang berhubungan dengan ilmu silat kepada pendeta itu. Qiu Chuji\nmelayani pertanyaan keduanya dengan senang hati."
      }), "\n", (0, import_jsx_runtime.jsxs)(_components.p, {
        children: ["Meskipun Ilmu Tombak Keluarga Yang sangat tangguh, tetapi kalau berhadapan dengan\nseorang ", (0, import_jsx_runtime.jsx)(_components.em, {
          children: "master"
        }), " dari dunia persilatan, kelihatannya agak lemah. Qiu Chuji bukan\ntermasuk jajaran paling atas dari segi ilmu silat dan tenaga dalam, tetapi kalau dibandingkan\ndengan Yang Tiexin, tentunya sangat jauh. Ia melihat bahwa ilmu tombak yang digunakan oleh\nYang Tiexin sungguh-sungguh ilmu sejati yang seharusnya dipakai di atas kuda. Kalau dipakai\nuntuk bertarung biasa, orang harus lebih kreatif dan memakai imajinasi, tidak boleh\nkaku. Kedua orang muda itu mendengarkan penjelasan Qiu Chuji dengan tekun."]
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Daun telinga mereka bertiga mulai terasa agak panas karena pengaruh arak, dan mereka\nmulai lelah. Yang Tiexin menawarkan kepada Qiu Chuji untuk menginap selama beberapa hari.\nTapi muka Qiu Chuji tiba-tiba membeku. "Ada orang sedang mencari aku. Apapun yang terjadi,\nkalian berdua tetap tinggal di sini, dan jangan keluar. Mengerti?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Mereka berdua mengangguk."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Qiu Chuji memungut kepala manusia di atas meja, lalu berjalan keluar rumah dan melompat\nke atas pohon dan bersembunyi di antara dedaunan. Guo Xiaotian dan Yang Tiexin belum\nmemahami apa yang terjadi, dan keduanya beranggapan Qiu Chuji bersikap aneh, karena\nselama beberapa saat mereka masih belum melihat perubahan apapun di luar rumah."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Beberapa saat kemudian barulah samar-samar terdengar derap kaki kuda dari sebelah Barat."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Pendengarannya luar biasa," pikir Yang Tiexin. Ia sedang membayangkan siapa yang\nakan menang seandainya Qiu Chuji sampai bertarung dengan Qu San. Tapi lamunannya segera\nbuyar ketika akhirnya sekitar 20 orang berkuda mendekat ke depan rumah, mereka\nberpakaian serba hitam.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Pemimpin kelompok itu menghentikan kudanya sambil berkata, "Jejak kaki berakhir di sini.\nKelihatannya sempat terjadi pertarungan." Beberapa orang kawannya melompat turun dari kuda,\ndan memeriksa jejak kaki di atas salju.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Si pemimpin memberikan perintah, "Geledah seisi rumah ini!"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Dua orang lagi turun dari kuda dan mengetuk pintu rumah. Tiba-tiba sebuah benda melayang\nturun dari pohon, dan menghantam kepala salah seorang dari mereka. Tenaga lemparan\nitu begitu kerasnya, sehingga hantamannya terasa sampai ke tulang tengkorak. Salah\nseorang dari mereka memungut benda itu dari tanah dan memeriksanya. Ia menjerit kaget,\n"Ini kepala Yang Mulia Wang!"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Si pemimpin menghunus goloknya, dan dengan segera diikuti sekitar 10 orang lainnya. Mereka\nmengepung pohon itu. Ia memberikan perintahnya. Lima orang dengan segera mengangkat\nbusur dan membidik ke arah Qiu Chuji."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin mengambil tombaknya dan bersiap keluar, tapi Guo Xiaotian berkata, "Dao Zhang\nmelarang kita keluar. Lagi pula, kalau dia memang mengalami kesulitan menghadapi orang\nsebanyak itu, kita tetap masih belum terlambat membantunya." Begitu ia selesai bicara,\nsebuah anak panah meluncur keluar dari pohon itu.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Ternyata Qiu Chuji berhasil menghindar dari empat anak panah, dan menangkap salah satunya,\nlalu dengan tenaga dalamnya ia membidikkan anak panah tersebut kembali ke tuannya\nseperti melempar senjata rahasia."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Ah!" terdengar seruan dari mulut salah seorang penyerangnya. Orang itu kemudian terjatuh\ndari kudanya, terguling-guling di atas salju ke semak-semak dan berhenti di situ.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Qiu Chuji menghunus pedangnya dan melompat turun. "Pendeta keparat!" bentak si pemimpin.\nIa menembakkan 3 anak panah berturut-turut, lalu menghentakkan tali kekang kudanya\ndan menerjang ke depan dengan golok terhunus. Pedang Qiu Chuji berkilat di tengah hujan salju,\nberturut-turut dua orang ambruk dari kudanya.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Yang Tiexin terpesona. Meskipun ia berlatih 10 tahun lagi, rasanya tetap belum mampu\nmelihat sambaran pedang secepat itu, apalagi membalasnya. Kalau Qiu Chuji tidak memberi\nangin pada saat mereka bertarung, pastilah ia sudah mati sekarang."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Qiu Chuji bergerak seolah-olah sedang menunggangi angin, dan sekarang ia menyerang\nsi penunggang kuda yang membawa golok. Kungfu orang itu sama sekali tidak buruk,\nsetiap gerakannya entah menusuk atau membabat terlihat sangat ganas. Yang Tiexin dan\nGuo Xiaotian bisa melihat bahwa Qiu Chuji sengaja menahan serangannya, maksudnya\nadalah menahan mereka semua dan mengumpulkannya ke sudut tertentu yang lebih bisa\ndiandalkan untuk membunuh semuanya tanpa ada yang lolos. Kalau si pemimpin terbunuh\nterlebih dahulu, maka semua sisa anak buahnya akan melarikan diri."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Setelah bertarung beberapa saat, jumlah mereka menyusut tinggal enam orang. Si pemimpin\nmerasa tidak sanggup melawan Qiu Chuji, ia berbalik dan bermaksud melarikan diri. Tapi\nQiu Chuji mengulurkan tangan kirinya dan berhasil menyambar ekor kuda. Dengan sekali tarik\ntubuhnya melayang di udara dengan pedang terhunus. Tanpa mendarat di atas kuda pedangnya\nsudah menembus punggung penunggangnya sampai ke dada. Qiu Chuji melemparkan tubuhnya ke tanah,\nlalu menunggangi kuda itu untuk mengejar yang lainnya. Dalam waktu singkat ia berhasil\nmenghabisi mereka semua tanpa sisa. Hamparan salju pun berwarna merah oleh darah mereka."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Qiu Chuji berhenti sambil memandang ke sekelilingnya. Yang terlihat hanya beberapa ekor\nkuda tanpa penunggangnya berlarian di sekeliling tempat itu. Ia tertawa sambil menatap\nkedua anak muda yang mengamati di pintu rumah."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Nah, bagaimana menurut kalian?" katanya.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Guo Xiaotian baru saja membuka pintu rumah, dan belum sempat menenangkan diri."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Dao Zhang, siapa orang-orang ini?" tanyanya.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Qiu Chuji menjawab, "Kita akan tahu begitu memeriksa jenazah mereka."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Guo Xiaotian menggeledah isi saku mereka, dan menemukan sebuah surat resmi. Rupanya\nsurat itu dari Hakim Zhao, yang isinya mengatakan bahwa Utusan dari Jin punya perintah,\nsupaya prajurit Song dan Jin bekerja sama untuk menangkap orang yang membunuh Wang Daokun\nsecepat mungkin."
      }), "\n", (0, import_jsx_runtime.jsxs)(_components.p, {
        children: ["Guo Xiaotian baru saja ingin meledak ketika Yang Tiexin berteriak. Ia menemukan\nsebuah ", (0, import_jsx_runtime.jsx)(_components.em, {
          children: "tag"
        }), " dari balik baju salah satu orang. Di situ terdapat tulisan berbahasa\nJurchen, yang artinya adalah dalam kelompok itu terdapat beberapa orang prajurit\nJin."]
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Guo Xiaotian berkata dengan geram, "Musuh ternyata bisa berbuat apa saja, termasuk\nmenangkap dan membunuh, di wilayah perbatasan, dan para pejabat Song kita ternyata\nbetul-betul tunduk kepada Duta mereka! Negara macam apa ini!"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin menghela nafas, "Kalau Kaisar dari Song membungkuk hormat dan menyebut diri\npejabat dari Kaisar Jin, ya tidak heran kalau sekarang para pejabat dan jendral kita\nsudah menjadi jongos mereka."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Qiu Chuji berkata dengan nada pahit, "Kami para pendeta seharusnya berbelas kasihan\ndan murah hati, baik di dalam hati maupun tindakan. Tapi kalau melihat gerombolan musuh\ndan pengkhianat yang selain tidak berbuat apa-apa, malah menambah kesengsaraan rakyat kita,\naku jadi tidak sanggup berbelas kasihan dan murah hati."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Kedua orang lainnya langsung menyambut ucapan itu, "Kau benar! Mereka pantas mati!"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Penduduk desa itu hanya sedikit, dan di tengah badai salju seperti itu semua orang\nmalas keluar rumah. Kalaupun ada orang yang kebetulan menyaksikan peristiwa itu, maka mereka\npasti sudah lari jauh-jauh sebelumnya. Siapa yang cukup berani memeriksa dan bertanya?\nYang Tiexin mengambil sekop dan pacul untuk mereka bertiga, dan mereka mengubur semua\njenazah itu ke satu lubang yang sama."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Bao Xiruo mengambil sapu dan mulai membersihkan sisa-sisa darah yang berceceran di\natas salju. Setelah beberapa saat, bau amis darah menembus langsung ke perutnya. Pandangannya\ngelap, dan ia merintih pelan lalu duduk di atas salju. Yang Tiexin terkejut, cepat-cepat\nmendekat sambil bertanya, "Ada apa? Kenapa?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Bao Xiruo menutup matanya tanpa menjawab. Melihat mukanya yang pucat dan merasa\ntangannya dingin, Yang Tiexin jadi semakin kuatir. Qiu Chuji mendekat, lalu memegang\npergelangan tangan Xiruo untuk memeriksa nadinya."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Mendadak ia tertawa. "Selamat! Selamat!"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Bao Xiruo mendadak bangun dan mendengus. Melihat ketiga orang pria yang mengelilinginya,\nia merasa agak malu, lalu berjalan masuk rumah."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Istrimu sedang hamil," kata Qiu Chuji sambil tersenyum.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Yang Tiexin berlari ke dalam rumah dengan girang. Mereka semua akhirnya merayakan\nkehamilan Bao Xiruo dengan penuh kegembiraan sambil menyelesaikan pekerjaan menguburkan\nmayat para penyerang itu."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin memikirkan kehamilan istrinya sambil tersenyum simpul. Ia lalu bertanya\nkepada Qiu Chuji, "Dao Zhang, istri Guo Da Ge juga sedang hamil, apa kau punya usul\nnama apa yang cocok untuk anak-anak kami ini?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Qiu Chuji berpikir sejenak, lalu menjawab, "Anak Guo Xiongdi diberi nama Guo Jing,\nsedangkan anak Yang Xiongdi diberi nama Yang Kang. Dengan begini tidak jadi masalah\nmereka laki-laki atau perempuan, nama-nama itu akan tetap bisa dipakai."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Guo Xiaotian menjawab, "Bagus sekali! Dao Zhang mengingatkan supaya kita selalu\nmengenang Insiden Jing Kang, peristiwa memalukan untuk kedua kaisar yang ditawan itu."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Betul." kata Qiu Chuji. Ia mengeluarkan dua belah pisau dari sakunya. Keduanya\nsama, dengan sarung kulit berwarna hijau. Ujung pegangannya berlapis emas, dengan\ngagang berwarna hitam. Ia kemudian mengukirkan nama anak-anak itu di gagang pisau\nmasing-masing dengan kecepatan yang luar biasa. Bahkan sebelum Guo Xiaotian dan\nYang Tiexin menyadari apa yang ditulisnya, pekerjaan kecil itu sudah selesai.\n"Aku tidak punya apapun yang berharga kecuali sepasang pisau ini." katanya sambil\ntersenyum. "Bagaimana kalau aku sumbangkan barang ini kepada anak-anak kalian?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Yang Tiexin dan Guo Xiaotian tentu saja menjerit kegirangan. Mereka buru-buru berterima kasih\nsambil membungkuk hormat menerima hadiah tersebut sesuai nama anak masing-masing. Ketika\nmereka menghunus pisau itu, terasa semacam hawa dingin keluar dari dalamnya. Mata pisaunya\nsungguh-sungguh tajam."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Sepasang pisau ini aku dapatkan secara kebetulan. Meskipun sangat tajam, tapi karena\nterlalu kecil, maka sama sekali tidak cocok untuk aku. tapi anak-anak kalian bisa memakainya\nuntuk melindungi diri. Sepuluh tahun dari sekarang aku akan datang lagi, dan mengajarkan\nkungfu kepada anak-anak ini. Menurut kalian bagaimana?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Tak terhingga rasa terima kasih mereka berdua ketika mendengar hal itu. Qiu Chuji\nakhirnya berkata, "Para tentara Jin datang ke Utara dan menyengsarakan rakyat di situ.\nHal seperti ini tidak boleh berlangsung terlalu lama. Jaga diri kalian baik-baik."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Ia mengangkat cawan araknya, lalu menghabiskan isinya dengan sekali teguk. Lalu ia bangkit\ndan berjalan keluar. Guo Xiaotian dan Yang Tiexin melompat dan berusaha memintanya\nmenginap beberapa hari. Tetapi langkahnya sangat cepat dan mantap, ia sudah lari\nterlalu jauh."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Pendekar seperti dia selalu datang dan pergi seenaknya," kata Guo Xiaotian. "Kita\ntidak tahu kapan bisa ketemu dia lagi."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Mereka lalu membicarakan apa yang baru saja terjadi dengan gembira, sambil memain-mainkan\npisau kecil itu. Tiba-tiba Yang Tiexin bertanya, "Da Ge, aku punya usul yang rada konyol,\njangan tertawa ya."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Usul apa?" tanya Guo Xiaotian.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Kalau anak kita sama-sama laki-laki atau perempuan, biarlah mereka jadi saudara." jelas\nYang Tiexin. Guo Xiaotian memotongnya, "Dan kalau laki-laki dan perempuan, biarlah mereka\nmenikah."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Mereka lalu tertawa terbahak-bahak."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Bao Xiruo keluar dari kamar sambil tersenyum dan bertanya, "Ada apa kalian begitu girangnya?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin menceritakan rencana mereka berdua. Bao Xiruo tersipu, tapi ia sangat senang\nmendengar rencana itu. Yang Tiexin lalu mengusulkan, "Ayo kita tukar pisau sekarang,\nanggap saja sebagai semacam tanda pertunangan. Kalau ternyata mereka sama-sama laki-laki\natau perempuan kan kita tetap bisa tukar lagi. Tapi kalau ternyata laki-laki dan perempuan..."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Ya kalau begitu, mohon maaf," kata Guo Xiaotian bercanda. "kedua pisau ini jadi\nmilik keluargaku."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Bao Xiruo tertawa dan berkata, "Kau tahu dari mana? Mungkin saja malah jadi milik\nkeluarga kami."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Dengan begitu mereka saling tukar pisau sebagai tanda perjanjian."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Guo Xiaotian membawa pulang pisaunya dan memberi tahu istrinya. Li Ping sangat\nsenang mendengar berita itu."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Yang Tiexin masih bermain-main dengan pisau pemberian Qiu Chuji sambil minum arak\nsendirian. Tanpa sadar ia sudah mabuk. Bao Xiruo membantunya pindah ke tempat tidur,\nlalu menyelimutinya. Ia merapikan cawan dan kendi arak yang tercecer."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Karena hari sudah semakin malam, ia lalu pergi ke halaman belakang untuk mengumpulkan\nkandang ayam dan merapikannya. Ketika ia menutup pintu belakang, ia sekilas melihat\nada noda darah tertinggal tepat di atas salju di depan pintu. "Aih! Rupanya masih ada yang\ntersisa." pikirnya. "Kalau sampai ada pejabat yang mendengar tentang ini, kita semua\nakan sulit." Ia lalu mengambil sapu, lalu mulai membersihkannya.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Tetesan darah itu kalau ditelusuri ternyata mengarah ke tumpukan kayu di belakang\nrumah. Ada tanda-tanda bahwa seseorang merangkak di sepanjang jalan menuju ke sebuah\npohon pinus di situ. Bao Xiruo mengikuti arah jejak itu dengan curiga. Ia tiba di dekat\nsebuah kuburan tua. Ia melihat sesuatu berwarna hitam melingkar di atas tanah."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Karena kurang jelas dan ia masih penasaran, ia pun berjalan mendekat. Ternyata sesosok\nmayat yang berpakaian hitam. Jelas sekali orang ini salah satu dari para penyerang yang\nbertempur melawan Qiu Chuji tadi sore. Orang ini tidak langsung mati di tempat, dan\nmasih sempat merangkak ke sini."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Ketika ia berpikir untuk memanggil suaminya untuk menguburkan mayat itu, mendadak\npikiran lain melintas di benaknya. "Bagaimana kalau seseorang tiba-tiba muncul dan\nmelihat mayat ini di sini?" Ia lalu mengumpulkan tenaga, dan bermaksud menyeret mayat\nitu ke semak-semak terdekat, sebelum masuk rumah dan membangunkan suaminya. Suaminya\nsedang mabuk, pasti agak susah dibangunkan. Baru menarik sedikit, tiba-tiba mayat itu\nmengejang, dan juga mengeluh.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Bao Xiruo sangat ketakutan. Seketika itu ia ingin lari menyelamatkan diri, tetapi\nkakinya seperti dipaku ke tanah dan ia terdiam kaku beberapa saat. Setelah menunggu\nagak lama, mayat itu tidak bergerak lagi. Dengan agak takut, Bao Xiruo menyentuh mayat\nitu dengan sapunya. Mayat itu mengeluh lagi, tapi kali ini suaranya jauh lebih lemah."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Sekarang ia baru sadar kalau orang itu ternyata masih hidup! Ia mangamatinya dari jarak\nlebih dekat, dan melihat bahwa sebelah belakang bahu orang itu terkena anak panah\nyang menembus sangat dalam ke dagingnya. Anak panah itu berlumuran darah. Salju masih\nterus turun. Muka orang itu mulai diselimuti salju. Hanya sedikit waktu lagi orang itu\npasti akan mati kedinginan."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Bao Xiruo sejak kecil punya hati yang sangat lembut. Kalau ia melihat kelinci, burung,\nkodok, atau bahkan kutu, yang sedang terluka, ia akan membawanya pulang untuk\nmerawatnya sampai sembuh. Setelah binatang itu sembuh, barulah ia akan melepaskannya.\nKalau sampai ia gagal merawat dan menyembuhkan binatang terluka itu, dan akhirnya\nmereka mati, maka ia akan merasa sangat tidak enak sepanjang hari. Sifat ini tidak\nberubah sampai ia dewasa, bahkan sampai sekarang, setelah ia menikah. Kebiasaan kecil ini\nmembuat rumah mereka selalu dipenuhi binatang-binatang aneh, mulai dari jangkrik, kodok,\nburung, kelinci, dan sejumlah besar ayam, yang semuanya tidak boleh dimasak. Ayahnya\nmemberi nama yang sangat cocok dengan kepribadiannya: Xiruo, yang berarti lemah, atau penuh kasih."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Nah, sekarang yang dilihatnya adalah seorang manusia, yang tadinya dikira sudah tewas,\ntapi ternyata masih hidup, dam nafasnya tinggal satu-satu. Meskipun ia jelas tahu\norang ini sebelumnya menyerang ke rumahnya dan terlihat sangat ganas, tapi saat itu\nsifatnya yang sudah menjadi watak tiba-tiba menguasai. Hatinya tersentuh. Hanya sedetik\nia ragu-ragu apakah harus lebih dahulu berunding dengan suaminya. Suaminya yang sedang\nmabuk pasti susah dibangunkan. Bukan hanya sulit, bahkan kemungkinan besar tidak bakalan\nbangun."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Akhirnya ia mengambil obat luka untuk meghentikan pendarahan milik suaminya, lalu\nmengambil kendi arak yang masih hangat, dan beberapa helai kain bersih. Ia berlari kembali\nke halaman belakang. Orang itu masih ada di tempatnya. Bao Xiruo membantunya duduk,\nlalu menuangkan sisa arak di kendi ke mulutnya. Sejak kecil ia sudah terbiasa merawat\nluka, dan tahu bahwa sekali anak panah itu ditarik, maka pendarahan hebat pasti akan\nterjadi, tapi kalau tidak ditarik, maka tidak mungkin luka itu akan bisa ditangani."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Dengan memberanikan diri dan menggigit bibirnya sendiri, ia lalu memakai pisau untuk\nmenyayat sedikit kulit di sekitar luka akibat anak panah itu. Orang itu berteriak kesakitan,\nlalu pingsan. Bao Xiruo membalut gagang anak panah dengan kain, lalu mengumpulkan\ntenaga dan menariknya kuat-kuat. Dalam pingsannya orang itu masih mengeluh tertahan."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Darah mengucur deras, dan sebagian baju Bao Xiruo terkena cucuran darah, tapi ia\nberhasil menarik keluar anak panah itu. Melihat begitu banyak darah mengalir, jantung\nBao Xiruo berdetak keras dan ia merasa mau pingsan. Ia buru-buru membubuhkan obat\ndari suaminya untuk menghentikan pendarahan hebat itu, lalu membalut luka tersebut\ndengan kain bersih. Orang itu mulai bergerak sedikit, tetapi terlihat sangat lemah\ndan kelihatannya ia sangat lelah, sampai tidak bisa bersuara."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Bao Xiruo begitu ketakutan, sampai tidak bisa memikirkan cara untuk membantu orang itu\npindah dari tempatnya. Untuk mengangkatnya, jelaslah ia tidak kuat. Tiba-tiba ia\nmendapat sekilas ide, lalu mengambil bekas daun pintu yang tergeletak di halaman\nbelakang, dan dengan sekuat tenaga ia menarik tubuh orang itu ke atas daun pintu\nyang ia letakkan di dekat tempat orang itu terdiam, setangah pingsan. Setelah itu\nia menyeret daun pintu itu seperti menyeret sebuah tandu di atas salju ke arah rumah mereka,\nlalu membawanya ke lumbung. Ia mengatur tumpukan jerami sekenanya supaya orang itu\nbisa berbaring dengan agak nyaman."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Setelah melalu situasi menegangkan sekian lama, baru sekarang ia merasa agak tenang.\nIa kembali ke rumah, lalu mengganti bajunya yang berlumuran darah, mencuci muka dan membersihkan\ntangan. Lalu ia mengambil sisa sup ayam yang masih ada, mengambil lilin, dan kembali\nke lumbung. Orang itu kelihatannya tertidur, nafasnya agak lemah tetapi cukup teratur."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Bao Xiruo merasa agak lega, lalu mencoba menyuapinya dengan semangkuk sup yang dibawanya.\nOrang itu minum setengah mangkuk, lalu batuk-batuk hebat."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Bau Xiruo terkejut, mungkin ia tersedak. Tanpa sadar ia mulai mengamati wajah orang itu.\nDi bawah cahaya lilin ia melihat seraut wajah yang halus, dengan hidung yang mancung.\nTernyata seorang pemuda yang sangat tampan. Muka Bao Xiruo mendadak merona, dan tangannya\nagak gemetar, setetes lilin jatuh ke wajah pemuda itu."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Pemuda itu membuka matanya. Ia menatap seraut wajah secantik bunga, yang agak memerah\nkarena malu, sepasang mata yang seperti bintang berkedip, penuh dengan simpati. Ia merasa\nseolah-olah sedang bermimpi, dan ia terpesona."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Bao Xiruo berbisik, "Sudah lebih baikkah? Ayo habiskan sisa sup ini."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Pemuda itu berusaha meraih mangkuk sup, tapi tangannya serasa tak bertenaga sama sekali,\ndan sup itu nyaris tumpah membasahi bajunya. Bao Xiruo buru-buru memegang mangkuk itu.\nSaai ini yang paling penting adalah menyelamatkan nyawanya. Jadi ia tanpa ragu-ragu\nmenyuapi si pemuda dengan sabar, sedikit demi sedikit."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Setelah minum semangkuk sup ayam, mata pemuda itu kelihatannya mulai bersinar dan\nmemperlihatkan tanda-tanda kehidupan. Ia menatap Bao Xiruo dengan penuh rasa terima kasih,\nmelampaui segala kata-kata. Ditatap seperti itu, Bao Xiruo mulai merasa malu, ia lalu\nmengambil sedikit jerami untuk menyelimuti pemuda itu supaya tetap hangat, lalu kembali\nke rumahnya sambil membawa lilin."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Sepanjang malam itu ia tidak bisa tidur nyenyak, dan beberapa kali mengalami\nbeberapa kali mimpi buruk. Mula-mula ia melihat suaminya menikam pemuda itu\ndengan tombak sampai mati. Lalu ia melihat pemuda itu membunuh suaminya, dan mulai\nmengejarnya. Ia dikelilingi kegelapan, dan tidak tahu harus lari atau bersembunyi\ndi mana. Beberapa kali ia terbangun dari mimpi dengan berkeringat dingin."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Ketika terbangun keesokan harinya, ternyata suaminya sudah bangun, dan sedang mengikir\nmata tombaknya. Ia langsung teringat mimpi buruk semalam, lalu segera lari ke lumbung\ndan membuka pintunya. Ia terkejut, karena ternyata tidak ada orang di situ, hanya tumpukan\njerami yang terlihat kacau. Orang itu sudah menghilang."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Ia berlari ke halaman belakang, dan melihat pintunya setengah terbuka. Di atas salju\nterlihat jejak seseorang yang mencoba merangkak dan berguling ke arah Barat. Ia melamun\nsendirian di situ sambil menatap jejak itu."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Setelah agak lama, tiupan angin dingin menerpa wajahnya dan ia merasa perutnya sakit,\nkakinya terasa lemah. Mengantuk, ia lalu kembali ke ruang tamu. Di situ Yang Tiexin\nternyata sudah membuatkan bubur, dan meletakkannya di atas meja. Tersenyum, ia berkata,\n"Coba lihat, bubur buatanku tidak terlalu jelek kok."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Bao Xiruo tahu bahwa suaminya jadi lebih pengertian setelah dia hamil. Ia tersenyum,\nlalu mulai makan. Ia tahu kalau ia menceritakan kejadian semalam, suaminya pasti\nakan cemburu dan marah, lalu mengejar pemuda itu dan membunuhnya. Apa ini bukan sama\nsaja dengan membunuh pemuda itu sendiri? Jadi dia lalu memutuskan untuk tidak akan\npernah menceritakan kejadian itu kepada siapapun juga."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.hr, {}), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Musim dingin berlalu, dan datanglah musim semi. Dalam sekejap beberapa bulan berlalu,\ninsiden malam itu seakan terselip dalam ingatan Bao Xiruo sementara kandungannya\nsemakin besar, dan ia merasa lebih cepat lelah."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: `Malam itu mereka baru saja selesai makan, dan Bao Xiruo duduk di dekat penerangan
sambil menjahit celana untuk suaminya. Yang Tiexin menggantungkan dua pasang sandal
yang terbuat dari jerami di dinding. Ia baru selesai membuatnya. Karena ia teringat
akan mata bajak yang rusak ketika ia sedang menggarap sawah tadi siang, ia lalu menoleh
kepada istrinya dan berkata, "Mata bajakku rusak tadi, besok aku akan ketemu Zhang Mu'Er
di desa sebelah Timur, supaya ia bisa memperbaikinya."`
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Baiklah." kata Bao Xiruo.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Aku sudah punya banyak baju, kau tidak perlu repot-repot bikin terlalu banyak.\nApalagi sekarang kondisimu sangat lemah, seharusnya lebih banyak istirahat."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Bao Xiruo menoleh kearahnya dan tersenyum, tapi tangannya tidak berhenti."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Yang Tiexin kemudian mendekat, mengambil bahan pakaian yang sedang dijahit itu,\nberikut benang dan jarumnya. Baru pada saat itu Bao Xiruo menguap, lalu ia meniup\napi lilin dan masuk ke kamar."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Di tengah malam ia terbangun, dan melihat suaminya duduk di dekatnya. Dari kejauhan\nterdengar derap kaki kuda sedang mendekat. Suara itu datang dari arah Barat. Tak lama\nkemudian terdengar lagi derap kaki kuda dari arah Timur datang mendekat, dan kemudian\ndari arah Utara dan Selatan. Bao Xiruo terkesiap, lalu bangun dan duduk di tempat tidur."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Kenapa ada suara kuda dari empat penjuru?" tanyanya.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin melompat berdiri dan berpakaian. Suara kuda itu semakin dekat, diikuti\ngonggongan anjing dari rumah-rumah penduduk desa. Yang Tiexin menjawab, "Kita dikepung."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Terkejut, Bao Xiruo kembali bertanya, "Mengapa?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Aku tidak tahu." kata Yang Tiexin. Ia mengulurkan pisau pemberian Qiu Chuji\nkepada istrinya, "Pegang ini, untuk melindungi diri." Ia lalu melihat keluar dari jendela.\nSaat itu suara ringkikan kuda dan suara manusia sangat keras dari semua penjuru,\ndan terdengan kacau. Mereka mengepung seluruh desa dengan obor di tangan. Tujuh\natau delapan orang mondar-mandir di atas kuda sambil berteriak-teriak.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Salah satunya berseru, "Tangkap para pengkhianat itu! Jangan biarkan mereka lari!"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin berpikir, "Apa mungkin mereka mau menangkap Qu San? Sudah agak lama aku\ntidak ketemu dia. Untungnya dia tidak di sini. Kalau tidak, mana mungkin lolos dari\nkepungan orang sebanyak ini, seberapa tinggi pun kungfunya."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Tiba-tiba salah seorang dari mereka berteriak, "Yang Tiexin, Guo Xiaotian, kalian berdua\npengkhianat, ayo cepat keluar!"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin terkejut, muka Bao Xiruo berubah pucat. Yang Tiexin berbisik, "Aku tidak tahu\napa yang terjadi dengan pemerintah kita yang sekarang. Mereka hanya tahu cara mengganggu\npenduduk biasa. Kita tidak mungkin melawan mereka. Satu-satunya cara adalah melarikan diri.\nJangan panik, dengan tombak ini aku pasti akan bisa membawamu lari."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Kungfunya bagus, jadi ia tidak panik meskipun menghadapi bahaya. Ia mengambil busur\ndan anak panah, lalu membawanya di punggung. Ia menggandeng tangan istrinya."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Aku akan berkemas." kata Bao Xiruo.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Berkemas gimana?" kata Yang Tiexin. "Semuanya kita tinggalkan."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Bao Xiruo tiba-tiba gemetar, air matanya mulai menitik. Ia bertanya dengan suara\ngemetar, "Bagaimana dengan rumah kita?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Yang paling penting adalah tetap hidup. Soal rumah bisa kita mulai lagi yang baru,\ndi tempat lain." kata Yang Tiexin.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Bagimana dengan ayam, bebek, dan kucing kita?" tanya Bao Xiruo lagi.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin mengeluh, "Aduh, bodoh. Masa saat ini kau masih juga kuatir soal mereka\nsemua?" Setelah berhenti sejenak, ia lalu menghibur istrinya, "Buat apa orang-orang\ndari pemerintah ini peduli sama ayam, bebek, atau kucing segala?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Tepat setelah ia selesai bicara, cahaya obor di luar terlihat bergerak. Beberapa\nprajurit menyalakan dua onggok jerami dengan api dari obornya. Beberapa orang\nmendekati rumah dengan membawa obor, mereka bermaksud membakar rumah."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Yang Tiexin, Guo Xiaotian! Kalau kalian masih tidak mau keluar, kami akan membakar\nseluruh isi Desa Niu ini sampai rata dengan tanah!" seru salah seorang dari mereka.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin kehilangan kesabarannya. Ia membuka pintu, lalu berkata dengan gagah\ndan lantang, "Aku Yang Tiexin, kalian mau apa?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Prajurit yang ada di hadapannya terkejut dan terlihat takut. Ia berbalik dan lari\nke arah deretan kawan-kawannya. Dari arah belakang seorang pria maju dengan kudanya\nsambil berkata, "Bagus! Jadi kau Yang Tiexin, ayo ikut ke Kehakiman, tangkap dia!"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Serempak empat atau lima prajurit maju. Yang Tiexin memutar tombaknya, mengayun\ndan memamerkan jurus 'Pelangi Putih Di Langit', ia menyapu sekaligus tiga orang\nprajurit rebah ke atas tanah. Ia meneruskan dengan menangkap seorang prajurit\nlainnya, lalu melemparkannya ke arah kerumunan."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Ia berseru, "Kalau mau menangkapku, mula-mula kalian harus menyebutkan kejahatan\napa yang aku lakukan!"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Pengkhianat! Kau berani menolak perintah penangkapan!" jawab orang itu. Meskipun mereka\nmenyebutkan namanya dengan lantang, tapi mereka terlihat gentar melihat keberaniannya,\ndan juga ilmu silatnya, jadi mereka tidak berani mendekat. Seorang lain yang ada\ndi belakangnya menyahut, "Ikut saja dengan damai ke pengadilan. Jadi hukuman atas\nkejahatanmu tidak bertambah berat. Kami punya perintah resmi untuk menangkapmu."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin menjawab, "Kalau begitu tunjukkan!"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Orang itu balas bertanya, "Bagaimana dengan pengkhianat satunya, Guo Xiaotian?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Guo Xiaotian menyelipkan tangannya sambil memegang busur dan anak panah keluar\ndari jendela sambil berseru, "Guo Xiaotian di sini!" Panah itu mengarah ke orang\nberkuda yang bicara dengan Yang Tiexin.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Orang itu berkeringat dingin. "Turunkan panahmu." katanya. "Aku akan membacakan perintahnya."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Baca sekarang!" kata Guo Xiaotian dengan geram. Ia menarik tali busurnya sampai\npenuh.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: `Karena tidak punya pilihan lain, orang itu lalu membacakan perintah, "Guo Xiaotian dan
Yang Tiexin dari Desa Niu, Propinsi Lin'an, berkolusi dengan para pengkhianat dan
penjahat dengan tujuan kejahatan. Tangkap mereka dan bawa ke pengadilan."`
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Guo Xiaotian bertanya, "Siapa pejabat yang mengeluarkan surat ini?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Menteri Han sendiri." jawab orang itu.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Guo Xiaotian dan Yang Tiexin sama-sama terkejut dan juga heran, "Masalah apa yang\nsepenting itu, sampai Menteri Han juga ikut campur? Apa mungkin tindakan Qiu Chuji\nwaktu itu sudah terbongkar?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Guo Xiaotian bertanya, "Siapa yang penggugat? Dan berdasarkan bukti macam apa?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Orang itu balas berseru, "Tugas kami hanya menangkap kalian. Kalau kau ingin membela\nkasusmu, ikut saja dengan kami ke pengadilan."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin balas berseru, "Menteri Han tahunya hanya mencelakai rakyat yang tidak bersalah\nseperti kami, semua orang tahu itu. Kami tidak akan masuk perangkap licik macam ini."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin berpaling kepada istrinya dan berkata, "Cepat pakai baju rangkap. Aku ambil\nkuda, begitu pemimpin mereka kena tembak, mereka pasti akan panik."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Suara busur ditarik dan anak panah dilepaskan terdengar tajam, diikuti oleh sambaran\nanak panah seperti meteor ke arah pemimpin di atas kuda. Orang itu menjerit keras, "Aiyo!"\nLalu jatuh dari kudanya. Para prajurit berteriak nyaring karena terkejut. Salah satunya\nberseru, "Cepat, tangkap mereka!" Serentak para prajurit itu memburu ke depan.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Yang Tiexin dan Guo Xiaotian melepaskan anak panah dengan cepat berturut-turut. Dalam\nsekejap mereka sudah berhasil menjatuhkan enam sampai tujuh prajurit. Tetapi jumlah\nmereka sangat banyak, dan beberapa orang berhasil menerjang sampai ke depan kedua\nrumah mereka."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Dengan teriakan keras Yang Tiexin melompat keluar dari pintu rumah, lalu menyerang\nseorang penunggang kuda putih dengan tombaknya. Orang itu juga sedang menyerang ke arahnya\ndengan tombak, tetapi Ilmu Tombak Keluarga Yang sangat cepat, tombak Yang Tiexin\nmenghantam kaki orang itu secepat kilat, lalu ia mengangkat tombaknya, menjatuhkan\norang itu dari kudanya."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Dengan bantuan hentakan tombak ke atas tanah, Yang Tiexin melompat ke punggung\nkuda. Dalam sekejap ia kemudian melompat bersama kuda ke arah rumah. Ia lengsung\nmembunuh prajurit di dekat pintu rumah dengan tusukan tombak, lalu membungkuk dan\nmengulurkan tangannya untuk meraih Bao Xiruo, dan mengangkatnya ke atas kuda. Ia\nmenoleh ke arah Guo Xiaotian dan berseru, "Da Ge, ikuti aku!"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Guo Xiaotian mengayunkan sepasang tombak pendeknya untuk melindungi istrinya,\nsambil menerjang ke depan ke arah kerumunan. Melihat ketangguhan kedua pria itu,\npara prajurit tidak berani mendekat. Jadi mereka mulai menyerang mereka dengan panah."
      }), "\n", (0, import_jsx_runtime.jsxs)(_components.p, {
        children: ['Yang Tiexin melarikan kudanya ke sisi Li Ping, lalu ia melompat turun. "', (0, import_jsx_runtime.jsx)(_components.a, {
          href: "#da-sao",
          title: "Kakak ipar",
          children: "Da Sao"
        }), ',\ncepat naik!"']
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Li Ping berkata dengan nada cemas, "Ini tidak bagus."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Yang Tiexin tidak peduli apa yang dikatakannya, ia langsung mengangkat Li Ping\nke atas kuda. Kedua pria itu mengikuti di belakang kuda sambil terus melawan. Pelan-pelan\nmereka mulai meninggalkan tempat itu."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Setelah bejalan sedikit mereka mendengar suara dari kelompok lain mendekat ke arah\nmereka. Keduanya mengeluh. Ketika mereka sedang mencari arah lain untuk melarikan diri,\ntiba-tiba anak panah menyerang. Bao Xiruo menjerit tertahan, "Aiyoo!"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Kudanya tertembak anak panah dan langsung jatuh, melemparkan kedua penunggangnya\nke tanah. "Da Ge, kau lindungi mereka!" seru Yang Tiexin. "Aku cari kuda lain."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Ia menerjang ke arah kerumunan prajurit. Sekitar sepuluh orang prajurit berbaris\ndi depannya sambil mengacungkan tombak, dan berseru serentak."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Melihat banyaknya jumlah musuh, Guo Xiaotian berpikir, "Bagi kita berdua, meloloskan\ndiri tidak sulit. Tapi istri-istri kita tidak akan lolos. Ini bukan seperti kita\nmelakukan kejahatan besar, jadi sebetulnya menghadap ke pengadilan sepertinya lebih\nbaik daripada mati konyol di sini. Waktu Qiu Chuji membunuh para penyerang itu, rasanya\ntak satupun lolos. Jadi mustinya tidak akan ada saksi mengenai peristiwa itu. Lagipula,\nkita berdua sama sekali tidak membunuh satupun dari pejabat maupun prajurit Jin." Karena\nitu ia lalu berseru, "Xiong Di, hentikan! Ayo kita ikut mereka."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Yang Tiexin terkejut mendengar itu, jadi ia berbalik sambil menyeret tombaknya."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Pemimpin pasukan itu berseru, "Jatuhkan senjatamu, dan nyawamu akan diampuni."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin berkata, "Da Ge, jangan masuk perangkap mereka." Tapi Guo Xiaotian\nmenggelengkan kepalanya, lalu menjatuhkan sepasang tombak pendeknya. Yang Tiexin\nberpaling ke arah istrinya, dan ia tidak tahan melihat ketakutan di wajah Bao Xiruo.\nIa menghela nafas dan melemparkan tombaknya ke atas tanah. Begitu kedua pria itu\nmenjatuhkan senjata, dengan segera sepuluh tombak lebih mengepung mereka berempat.\nDelapan orang datang dan mengikat keempat orang itu dengan tangan di belakang\npunggung.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin mengangkat kepala dan menyeringai. Pemimpin pasukan itu mengangkat\ncambuk kudanya, lalu melecut Yang Tiexin tepat di mukanya. "Pengkhianat keparat!\nKau mau mati ya!" Bilur cambuk terlihat di muka Yang Tiexin mulai dari dahi\nsampai ke lehernya.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Dengan geram Yang Tiexin berkata, "Baiklah, siapa namamu?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Pejabat itu makin marah, cambuknya menyambar deras seperti hujan, "Orang tua ini\nbernama Duan Tiande! Ingat itu! Begitu sampai di pintu gerbang neraka kau bisa bilang\nsemua tentang aku."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin sama sekali tidak mundur ataupun berkedip, ia tetap berdiri di situ\nsambil menatap Duan Tiande, yang segera melanjutkan, "Di mukaku ada bekas luka pisau,\ndan juga ada tanda lahir! Ingat itu baik-baik!" Cambuknya menyambar lagi.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Melihat suaminya diperlakukan kasar, Bao Xiruo dan menjerit, "Dia orang baik dan tidak\nmelakukan kejahatan apapun. Mengapa kau.. memukulnya? Apa kau tidak mengerti keadilan?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin mendadak meludahinya, kena tepat di mukanya. Duan Tiande sangat murka,\nmenarik golornya dan berteriak, "Kubunuh kau, pengkhianat keparat!" Ia mengangkat\ngoloknya dan menghujamkannya ke bawah.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Yang Tiexin menghindar ke samping. Dua prajurit di sampingnya menyodokkan tombak\nke sisinya untuk membuatnya tidak bisa bergerak sementara Duan Tiande sekali lagi\nmemotong dengan goloknya. Karena tidak ada ruang gerak lagi, Yang Tiexin hanya bisa\nmelompat mundur untuk menghindari serangan itu. Kelihatannya si Duan Tiande ini\nmengerti sedikit kungfu. Meskipun luput lagi, ia dengan segera menusukkan goloknya ke\ndepan. Golok yang digunakannya bergerigi, dengan gerigi itu ia berhasil melukai\nbahu kiri Yang Tiexin. Dengan segera ia meneruskan dengan bacokan berikutnya."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Melihat saudaranya dalam bahaya, Guo Xiaotian mendadak melompat dan menendang\nmuka Duan Tiande. Dalam kagetnya, Duan Tiande menarik goloknya untuk mengusir\ntendangan itu. Meskipun kedua tangan Guo Xiaotian terikat ke belakang, tapi\ngerakan kakinya masih cukup berbahaya. Ia dengan cepat memutar kaki kirinya,\nbersamaan dengan itu ia mengirim kaki kanannya ke arah perut Duan Tiande."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Dalam kesakitan dan amarah yang hebat, Duan Tiande berteriak nyaring, "Tikam\nkeparat-keparat ini! Perintah dari atas, kalau mereka menolak ditangkap, bunuh\ndi tempat!"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Para prajurit meyerang serentak dengan tombak mereka. Guo Xiaotian menendang jatuh\ndua orang prajurit, tetapi karena tangannya terikat, maka kecepatannya terganggu,\nia harus melompat untuk menghindari tusukan tombak. Duan Tiande muncul dari arah belakangnya,\ngoloknya menghujam deras, membacok putus tangan kanan Guo Xiaotian di bagian bahunya."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Yang Tiexin berusaha keras untuk melepaskan ikatan tangannya, tapi berusaha sekeras\napapun ternyata ia gagal. Melihat kakaknya tergeletak luka di tanah, seolah gelombang\ntenaga raksasa keluar dari dalam dirinya. Ia menghentak putus ikatan tangannya, lalu\nmenghantam salah seorang prajurit terdekat dan merebut tombaknya. Mengamuk dengan\nilmu tombak keluarganya, seolah-olah ia sedang berhadapan dengan sepuluh ribu pasukan\nbersenjata sendirian. Ia baru mulai bergerak dan sudah menjatuhkan dua orang. Ia tidak\nlagi mempedulikan keselamatannya sendiri."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Melihat keadaan memburuk, Duan Tiande segera mundur. Dalam gebrakan sebelumnya,\nYang Tiexin agak menahan diri, sebenarnya ia tidak mau membunuh prajurit kekaisaran,\ntapi sekarang ia sudah sama sekali tidak peduli. Melihat keganasannya para prajurit\nitu takut, dan mereka lari tunggang langgang."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin tidak mau mengejar mereka. Ia lalu memebantu kakak angkatnya duduk.\nDarah mengalir deras dari tangan kanan Guo Xiaotian yang putus dan saat ini seluruh tubuhnya\nberlumuran darah. Air mata Yang Tiexin mengucur deras tak tertahan melihat pemandangan\nitu. Tapi Guo Xiaotian menggertakkan giginya dan berseru, "Xiong Di, jangan pedulikan\naku. Cepat pergi... Pergi...!"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin menjawab dengan panik, "Aku akan cari kuda, aku akan berjuang mati-matian\nsupaya kau bisa lolos."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Guo Xiaotian menjawab samar-samar, "Tidak... tidak..." Ia pingsan.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin segera membuka baju luarnya untuk digunakan sebagai pembalut luka\ndi bahu Guo Xiaotian yang dibabat putus, tapi bacokan Duan Tiande bukan hanya membabat\nputus lengan kanan Guo Xiaotian, tetapi juga melukai sebagian dadanya. Luka itu\nhampir sepanjang setengah badan, tidak mungkin dibalut. Guo Xiaotian tiba-tiba tersadar\ndan berkata perlahan dengan lemah, "Xiong Di, cepat selamatkan istri-istri kita. Aku...\naku.. tidak bisa... selamat..." Sebelum menyelesaikan kalimatnya, tubuhnya merosot,\nia meninggal.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Kedua saudara angkat itu selalu berpikir seakan-akan mereka sungguh-sungguh saudara\nkandung. Melihat saudaranya tewas secara mengenaskan begini, telinga Yang Tiexin\nseolah-olah mendengar kalimat yang mereka ucapkan pada saat mereka mengangkat sumpah\nbersaudara, "Berharap untuk mati di hari yang sama, bulan yang sama, tahun yang sama..."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Ia mengangkat kepalanya dan melihat ke sekeliling. Kedua istri mereka sudah hilang\ntanpa jejak di tengah kekacauan tadi. Ia berteriak nyaring, "Da Ge, aku akan membalas\ndendam!" Ia menggenggam tombaknya erat-erat dan berlari ke arah kerumunan prajurit\nyang masih ada. Saat itu para prajurit berbaris rapi. Duan Tiande memberi komando,\ndan hujan anak panah segera melumcur dengan deras ke arah Yang Tiexin. Ia tidak peduli,\ndan ia menangkis serbuan anak panah sambil menerjang ke depan. Seorang prajurit yang\nmenunggang kuda mengayunkan goloknya ke arah Yang Tiexin, tapi Yang Tiexin merunduk\nsambil menyelinap di bawah perut kudanya. Orang itu baru bermaksud memutar kudanya\nketika sebuah tombak tiba-tiba menembus jantungnya dari belakang. Yang Tiexin melompat\nke atas kuda dan melemparkan mayat itu ke tanah. Ia kemudian memutar-mutar tombaknya\ndengan ganas. Para prajurit itu ketakutan dan tidak berani mendekat, mereka mulai\nberlarian menyelamatkan diri.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Setelah mengejar beberapa saat, Yang Tiexin melihat seorang prajurit berkuda secepat\nmungkin sambil membawa seorang perempuan. Ia lalu melompat turun dari kuda dan menjatuhkan\nseorang prajurit yang berjalan kaki, mengambil busur dan anak panahnya. Ia membidik\nsebaik-baiknya di bawah penerangan minim dari obor. Panah itu menembus pantat kuda,\nyang dengan segera jatuh dan melemparkan penunggangnya. Yang Tiexin membidik sekali lagi\nuntuk membunuh prajurit itu."
      }), "\n", (0, import_jsx_runtime.jsxs)(_components.p, {
        children: ['Ia cepat-cepat berlari mendekat, dan melihat bahwa wanita yang terduduk di tanah itu\nternyata istrinya. Terkejut dan girang melihat suaminya, Bao Xiruo langsung memeluknya.\nYang Tiexin langsung bertanya, "', (0, import_jsx_runtime.jsx)(_components.a, {
          href: "#da-sao",
          title: "Kakak ipar",
          children: "Da Sao"
        }), ' di mana?"']
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Di depan," jawab Bao Xiruo. "dengan... dengan lebih banyak prajurit."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin memberi instruksi tegas, "Kau tetap di sini. Aku akan menyelamatkan dia."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Tapi di belakang kita ada lebih banyak prajurit." kata Bao Xiruo, terkejut.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin menengok ke belakang, dan seperti kata istrinya, ternyata ada sekelompok\nprajurit dengan obor di tangan mendatangi mereka. Yang Tiexin menggertakkan giginya\ndan berkata, "Da Ge sudah tewas. Bagaimanapun juga aku harus menyelamatkan Da Sao\nuntuk menyelamatkan garis keturunan keluarga Guo. Kalau Surga mengasihani kita, pasti\nkita akan bertemu lagi suatu hari nanti."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Bao Xiruo melingkarkan tangan di leher suaminya, dan tidak mau melepaskannya. Dalam isakan\ntangis ia berkata, "Kita tidak akan berpisah, kau bilang sendiri, mati pun kita akan\ntetap bersama, kau bilang sendiri! Kau sudah lupa itu? Kau bilang sendiri!"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Yang Tiexin merasakan kepahitan memenuhi dadanya dan terdiam sejenak. Lalu ia mencium\nistrinya. Betapapun ingin ia tetap bersama, ia kemudian melepaskan tangan istrinya\ndengan paksa, lalu menerjang ke arah para prajurit itu dengan tombaknya. Setelah\nkira-kira sepuluh langkah ia menengok ke belakang dan melihat istrinya menangis\ndi tengah debu yang beterbangan, dan sekelompok prajurit sudah berkerumun di sekitarnya."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Sambil menghapus air mata, darah, dan keringat di wajahnya, Yang Tiexin menepis segala\npikiran untuk menyelamatkan diri jauh-jauh, dan hanya berpikir tentang menyelamatkan saudara\niparnya, supaya kakak angkatnya memiliki keturunan."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Setelah mengejar beberapa saat, akhirnya ia mendapatkan seekor kuda. Setelah menginterogasi\nseorang prajurit dengan bengis, akhirnya ia tahu bahwa Li Ping ternyata tidak jauh di\ndepan. Karena itu ia memacu kuda secepat-cepatnya. Tiba-tiba ia mendengar jeritan seorang\nperempuan dari dalam hutan di tengah jalan. Ia segera berbalik dan memasuki hutan itu."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Li Ping berhasil membebaskan diri dari ikatan, dan sekarang ia melawan dua orang\nprajurit tanpa kuda dengan mati-matian. Ia lahir dan dibesarkan di daerah pertanian,\nkarenanya ia tumbuh sebagai wanita yang sangat kuat. Meskipun ia tidak bisa kungfu,\ntapi perlawanan mati-matian yang ditunjukkannya cukup sulit diatasi."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Kedua prajurit itu memaki dan menertawakan dia, tapi nyatanya sampai sekarang mereka\nbelum berhasil mengatasi perlawanannya. Tanpa basa-basi apapun Yang Tiexin langsung\nmembunuh mereka dengan dua tusukan tombak. Ia membantu Li Ping naik ke atas kuda,\nlalu mereka segera kembali ke arah Yang Tiexin semula untuk mencoba menemukan\nBao Xiruo."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Ketika mereka tiba d tempat itu, ternyata tidak ada seorang pun tersisa. Tapi saat\nitu langit mulai terang. Yang Tiexin turun dari kuda dan mulai memeriksa jejak kaki\ndi tanah. Ada tanda-tanda orang diseret ke suatu tempat di situ. Kemungkinan besar\nistrinya tertangkap lagi oleh kawanan prajurit yang sama."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Yang Tiexin segera melompat kembali ke atas kuda, dan menendang perutnya beberapa\nkali. Kudanya langsung melompat dengan kecepatan penuh. Sementara mereka sedang berpacu,\ndari sisi jalan terdengar tiupan terompet, lalu sepuluh atau lebih prajurit berbaju\nhitam menerjang keluar. Salah seorang yang memegang tongkat 'taring serigala' memukul\nderas. Yang Tiexin menangkis dengan tombaknya, lalu membalas dengan tusukan. Orang itu\nmembals dengan ayunan tongkat ke samping. Gerakan tongkatnya agak aneh, sepertinya\nbukan dari wilayah pusat."
      }), "\n", (0, import_jsx_runtime.jsxs)(_components.p, {
        children: ["Waktu Yang Tiexin dan Guo Xiaotian membahas soal kungfu, mereka sempat menyinggung\nsalah satu pahlawan yang bernama Qing Ming, yang terkenal karena menggunakan senjata\nseperti ini. Tapi selain dia, jarang sekali ada orang lain yang menggunakan senjata\nsejenis ini. Karena beratnya senjata itu, penggunanya harus memiliki otot punggung\nsebelah atas yang sangat kuat. Namun demikian, para tentara Jin sangat menyukai senjata\nini, karena bangsa Jin hidup di puncak dingin membeku di Liaodong, jadi mereka sangat\nkuat. Kalau digunakan di medan perang, senjata seperti ini sangat menguntungkan karena\nberatnya", (0, import_jsx_runtime.jsx)(_components.sup, {
          children: (0, import_jsx_runtime.jsx)(_components.a, {
            href: "#user-content-fn-anekdot-senjata",
            id: "user-content-fnref-anekdot-senjata",
            "data-footnote-ref": true,
            "aria-describedby": "footnote-label",
            children: "2"
          })
        }), "."]
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Setelah beberapa saat bertarung dengan orang ini, Yang Tiexin yang teringat diskusinya\ndengan Guo Xiaotian jadi curiga. Melihat teknik yang digunakan, orang ini jelas adalah\nseorang prajurit Jin. Ngapain dia ada di sini? Beberapa jurus kemudian, ia mempercepat\npermainan tombaknya, lalu menikam orang itu hingga jatuh dari kudanya. Para prajurit lain\nberbalik, lalu melarikan diri saking terkejut."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang Tiexin berbalik untuk memeriksa apakah Li Ping terluka setelah pertarungan tadi.\nMendadak dari dalam hutan sebuah anak panah meluncur deras dan menyambar Yang Tiexin\ndari belakang. Dengan panik Li Ping menjerit, "Yang Xiongdi, awas panah, panah!"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Hati Yang Tiexin membeku. "Jadi begini rupanya aku mati. Tapi sebelumnya aku pasti akan\nmembunuh keparat-keparat ini, jadi Da Sao bisa meloloskan diri." Ia lalu dengan nekat\nmenerjang maju ke arah kerumunan prajurit. Tapi luka di punggungnya terlalu serius,\npandangannya kabur, ia pingsan.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.hr, {}), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Pada saat Yang Tiexin mendorong tangannya, Bao Xiruo merasa hatinya tersayat. Dalam\nsekejap para prajurit itu sudah ada di dekatnya. Sebelum ia sempat melarikan diri,\ntangannya sudah terikat, dan ia dilemparkan ke atas kuda. Salah seorang prajurit yang\nmemegang obor mengamatinya dari jarak dekat, lalu menganggukkan kepala. "Sulit dipercaya\nkedua bangsat itu ternyata bisa berbuat begitu banyak, sampai membunuh banyak orang kita."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Salah satu lainnya tersenyum dan berkata, "Yah, akhirnya kan kita berhasil menyelesaikan\ntugas dengan baik. Setelah susah-payah ini setidaknya masing-masing orang berhak mendapat\n10 tael perak atau lebih."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yang pertama menjawab, "Hmm! Mari berharap para atasan tidak mengambilnya untuk diri\nmereka sendiri." Ia menoleh kepada para peniup terompet. "Ayo kita pulang!"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Para peniup terompet meniupkan satu atau dua nada panjang-panjang. Bao Xiruo tidak bisa\nmenangis lagi, karena yang ia pikirkan hanya suaminya, dan apakah suaminya masih hidup.\nSaat itu langit sudah mulai terang, dan para penduduk mulai bermunculan di sepanjang\njalan. Ketika mereka melihat para prajurit, para petani buru-buru minggir untuk memberi jalan.\nBao Xiruo mula-mula kuatir para prajurit itu akan mengganggunya, tapi ternyata mereka\nbersikap sangat sopan, jadi kekuatirannya lenyap."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Setelah berjalan beberapa li, terdengar teriakan dari arah depan, sepuluh orang atau lebih\nyang berpakaian hitam menyerang dari pinggir jalan. "Tidak tahu malu! Bisanya membunuh\norang tidak bersalah!" seru pemimpin kelompok itu.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Pemimpin pasukan sangat marah dan balas membentak, "Kalian pikir kalian ini siapa, Anjing!\nBerani bikin masalah di pinggiran ibukota! Ayo minggir, minggir!"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Gerombolan berbaju hitam itu tidak menjawab, malah maju menerjang. Meskipun jumlah\nmereka lebih kecil, tapi ternyata gerombolan itu semuanya ahli kungfu, jadi untuk\nsementara tidak pasti pihak mana yang lebih unggul."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Bao Xiruo diam-diam merasa senang, ia pikir mungkin teman-teman Yang Tiexin sudah\nmendengar kabar tentang hal ini, dan datang untuk menyelamatkan mereka. Dalam situsi\nkacau itu sebuah anak panah tiba-tiba meluncur dan melukai pantat kuda. Kesakitan hebat\ndan terkejut, kuda itu lari secepat-cepatnya ke arah Utara. Bao Xiruo memegang leher\nkuda dengan kedua tangannya karena takut jatuh."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Derap kaki kuda terdengar dari belakang mengejar ke arahnya. Dalam sekejap seekor kuda hitam\nberhasil melampauinya. Seorang pria yang menunggangi kuda itu memutar-mutar seutas tali laso\ndi atas kepalanya, lalu melemparkannya ke leher kuda Bao Xiruo. Kedua kuda itu\nlari berdampingan dengan cepat. Orang itu kemudian menarik talinya dan secara berangsur-angsur\nkuda mereka melambat. Setelah beberapa langkah kemudian, orang itu bersiul keras,\ndan kuda hitam itu mendadak berhenti sama sekali. Karena lehernya terikat, kuda Bao Xiruo\ntidak bisa jalan terus, lalu mendadak berdiri di atas kedua kaki belakangnya, meringkik\nkeras. Tenaga Bao Xiruo sudah terkuras habis oleh peristiwa malam itu, ditambah\ndengan kesedihan dan ketakutan, ia tidak kuat lagi menahan tali kekang kuda. Ia pun\njatuh dan pingsan."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Setelah tertidur sangat lama, pelan-pelan akhirnya ia membuka mata. Rasanya ia tidur\ndi atas ranjang yang sangat nyaman dan empuk, juga dengan selimut dari kapas yang\nsangat tebal. Saat membuka mata yang pertama dilihatnya adalah tirai berwarna hijau\ndari tempat tidurnya, dan ternyata ia memang tidur di atas ranjang. Lampu menyala di atas\nmeja di dekat ranjang itu, dan sepertinya ada seorang pria berbaju hitam sedang duduk\ndi sisi tempat tidurnya. Mendengar gerakannya, pria itu segera bangkit, lalu menyibakkan\ntirai tempat tidurnya dan bertanya, "Kau sudah bangun?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Kesadaran Bao Xiruo belum sepenuhnya pulih, yang dia tahu hanyalah bahwa orang ini\nsepertinya sangat familiar. Orang itu meletakkan tangan di dahinya, lalu berkata, "Masih\nsangat panas, jangan kuatir. Tabib akan segera datang."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Dengan linglung, Bao Xiruo akhirnya kembali tertidur."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Setelah beberapa lama, rasanya seorang tabib sedang memeriksa dia, lalu seseorang\ndatang menyuapi dia minum obat. Setelah itu yang bisa dia lakukan hanyalah tidur.\nIa bermimpi, lalu berteriak-teriak memanggil suaminya. Lalu seseorang menepuk-nepuk\npundaknya dengan lembut sambil menghiburnya."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Berikutnya ketika ia terbangun ternyata tengah hari, dan ia mengeluh. Seseorang datang\nmendekat dan membuka tirai. Kali ini mereka berhadapan muka, Bao Xiruo bisa melihat\nwajahnya dengan jelas. Ia sangat terkejut, karena wajah tampan ini, dan pria yang\ntersenyum di hadapannya ini adalah orang yang diselamatkannya beberapa bulan yang\nlalu di tengah salju."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Bao Xiruo bertanya, "Aku di mana? Mana suamiku?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Pemuda itu melambaikan tangannya, lalu mengatakan supaya ia jangan bicara terlalu\nkeras. Dengan suara pelan ia menjawab, "Para prajurit ada di depan, mereka mencari-cari\ndi sekitar tempat ini. Saat ini kita meminjam kamar dari petani setempat. Aku tadi\nharus berbohong dan bilang bahwa aku suamimu. Jangan sampai keterlepasan ngomong yang\nsebenarnya."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Bao Xiruo tersipu dan menganggukkan kepalanya, tetapi ia masih bertanya, "Mana suamiku?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Saat ini tubuhmu sangat lemah," kata pemuda itu. "Kalau sudah lebih baik, akan kuceritakan\nsemuanya."'
      }), "\n", (0, import_jsx_runtime.jsxs)(_components.p, {
        children: ["Bao Xiruo sangat ", (0, import_jsx_runtime.jsx)(_components.em, {
          children: "shock"
        }), '. Ia memegang ujung selimut dengan kedua tangannya erat-erat,\ndari nada suara pemuda itu ia merasa sesuatu yang sangat buruk telah menimpa suaminya.\nIa bertanya dengan suara gemetar, "Dia... apa yang terjadi? Dia kenapa?"']
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Pemuda itu menjawab, "Saat ini kekuatiran tidak akan menghasilkan apa-apa. Yang paling\npenting adalah kesehatanmu."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Bao Xiruo terus bertanya, "Dia... apa dia tewas?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Dari wajahnya jelas pemuda itu sadar bahwa ia tidak punya pilihan lain kecuali\nmenjawab, dan ia mengangguk pelan. "Pendekar Yang tewas di tangan para prajurit\nkeparat itu." Ia menggelengkan kepalanya dan menghela nafas.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Bao Xiruo merasa hatinya dirobek-robek, dan ia pingsan seketika. Ketika akhirnya sadar,\nbarulah tangisnya meledak."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Orang itu menghiburnya dengan lembut. Sambil terisak-isak, Bao Xiruo bertanya lagi, "Dia...\nbagaimana dia tewas?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Orang itu menjawab, "Pendekar Yang, dia bertubuh tinggi, bahunya lebar, umur sekitar\n20 tahun, dan bersenjata tombak, benarkah?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Ya, itu memang dia." kata Bao Xiruo.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Tadi pagi aku melihatnya bertarung melawan beberapa prajurit dan membunuh beberapa\norang dari mereka. Tapi... Aih! Salah satu prajurit itu berhasil menikamnya dari\nbelakang."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Bao Xiruo pingsan lagi. Ia tidak mau makan dan minum sepanjang hari. Ia merasa\nwajib mati bersama dengan suaminya. Pemuda itu tidak memaksanya juga, dan dia hanya\nmenemaninya bicara dengan sikap yang sangat lembut dan sopan."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Setelah beberapa waktu berlalu, Bao Xiruo merasa bahwa ia telah mengacuhkan kehadiran\npemuda itu, ia lalu bertanya, "Namamu siapa? Dari mana kau tahu kalau kami dalam kesulitan,\ndan kemudian datang membantu?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Aku bermarga Yan, namaku Lie." kata pemuda itu. "Aku dan teman-teman cuma kebetulan\nlewat kemarin, kami lihat para prajurit itu bikin masalah. Kami tidak suka, jadi kami\nmembantu. Siapa sangka ternyata aku menolong penyelamatku. Sepertinya kita ditakdirkan\nbertemu dengan cara seperti ini."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: `Waktu mendengar kalimat 'kita ditakdirkan' wajah Bao Xiruo, ia berusaha mengabaikan
pemuda itu dan memalingkan muka ke arah lain. Ia memikirkan masalah ini sejenak. Tiba-tiba
sesuatu yang mencurigakan melintas di benaknya, ketika ia menemukan titik lemah dalam
cerita pemuda itu. Ia berpaling dan bertanya, "Kau sekongkolan dengan para prajurit
itu ya?"`
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Aa.. apa?" Yan Lie terkesiap.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Bao Xiruo menjelaskan, "Waktu itu bukannya kau satu grup dengan para prajurit yang\nberusaha menangkap pendeta Tao itu? Itu sebabnya kau terluka kan?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: `Yan Lie menjawab, "Hari itu aku sedang sial. Aku datang dari arah Utara dan sedang
menuju Lin'an melewati desamu. Siapa sangka tiba-tiba sebuah anak panah muncul entah
dari mana dan menancap di pundakku. Kalau kau tidak berbaik hati dan mau menolong, tentulah
aku sudah mati sekarang, tanpa tahu apa dan bagaimana itu terjadi. Mau apa sih mereka
menangkap pendeta Tao? Pendeta Tao kan menangkap hantu, tapi prajurit menangkap
pendeta Tao, logika macam apa ini?" Sampai di sini ia tiba-tiba tertawa.`
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Bao Xiruo mengamatinya baik-baik. "Oh, jadi kau hanya kebetulan lewat dan bukan\nbagian dari mereka. Tadinya kukira kau salah satu orang yang berusaha menangkap pendeta\nTao itu. Aku betul-betul tidak tahu apa sebenarnya aku harus menyelamatkanmu."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Ia kemudian menjelaskan mengapa para prajurit itu ada di situ dan bagaimana\nQiu Chuji membunuh mereka semua."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Setelah bicara agak lama, Bao Xiruo tiba-tiba sadar bahwa Yan Lie sedang menatapnya\nsambil terpesona dan ia mendadak berhenti bicara. Ini membangunkan Yan Lie. Ia tersenyum\ndan berkata, "Maaf, aku tadi sedang memikirkan bagaimana caranya kita bisa lolos tanpa\nketahuan para prajurit itu."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Bao Xiruo menangis dan menjawab, "Suamiku sudah tewas, bagaimana aku bisa terus hidup.\nKau saja yang melarikan diri dan jangan pedulikan aku."'
      }), "\n", (0, import_jsx_runtime.jsxs)(_components.p, {
        children: ['Yan Lie menjawab dengan wajah kaku, "', (0, import_jsx_runtime.jsx)(_components.a, {
          href: "#furen",
          title: "Nyonya",
          children: "Fu Ren"
        }), ', suamimu tewas dibunuh bangsat-bangsat\nitu, dan kematiannya belum dibalas. Tapi kau tidak berusaha membawa bajingan-bajingan\nitu ke pengadilan, dan hanya cari mati. Waktu masih hidup suamimu adalah seorang\npendekar. Rasanya dia tidak akan tenang kalau tahu soal ini di alam baka."']
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Bao Xiruo menjawab, "Aku hanya seorang wanita lemah. Bagaimana mau membalas?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Dalam kemarahannya, Yan Lie menjawab, "Beban Fu Ren, aku dengan senang hati akan\nikut memikulnya di pundakku. Kau tahu siapa orang yang bertanggung jawab untuk masalah\nini?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Bao Xiruo berpikir sejenak dan menjawab, "Pemimpin pasukan itu namanya Duan Tiande,\nia punya bekas sayatan pisau di dahinya, dan tanda lahir di wajahnya."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yan Lie menjawab dengan serius, "Dengan adanya nama dan cara mengenalinya, seberapa\njauh pun dia melarikan diri, kita akan menyeretnya ke pengadilan!"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Ia keluar sebentar dan kembali dengan semangkuk bubur dan telur asin. Ia bicara\nlagi, "Kalau kau tidak peduli pada kesehatanmu, bagaimana kamu mau membalas dendam?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Bao Xiruo merasa omongannya sangat masuk akal, jadi ia mengambil bubur itu lalu\nmulai makan perlahan-lahan."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Pagi berikutnya Bao Xiruo bangkit dari tempat tidur dan merapikan bajunya. Ia menyisir\nrambut sepantasnya di depan cermin, menemukan seperangkat baju putih dan menyelipkan\nsekuntum bunga putih di rambutnya sebagai tanda penghormatan kepada suaminya. Yang\ndi lihatnya di depan cermin adalah seorang wanita cantik di puncak kehidupannya, namun\ndemikian suaminya telah meninggalkan dia terlebih dahulu."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Diliputi kesedihan dan kesepian, ia menundukkan kepalanya dan mulai menangis. Yan Lie\nmasuk dan melihatnya. Ia berkata dengan lembut, "Para prajurit sudah pergi sekarang,\nayo kita pergi."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Yan Lie memberi beberapa tail perak kepada pemilik rumah dan mengeluarkan dua ekor\nkuda. Kuda yang ditunggangi Bao Xiruo kena panah waktu itu, tapi Yan Lie sudah\nmerawatnya baik-baik."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Kita sekarang mau kemana?" tanya Bao Xiruo.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yan Lie menatapnya, memberi tanda supaya jangan bicara terlalu banyak di depan\norang lain. Ia membantunya naik ke atas kuda, dan mereka berdua menuju ke arah\nUtara. Setelah berjalan beberapa li Bao Xiruo bertanya lagi, "Kita mau kemana?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yan Lie menjawab, "Kita cari tempat yang tenang dulu untuk sementara, dan menunggu\nbadai reda. Setelah tentara berhenti melacak kita dan mengendorkan pengawasan, aku\nakan mencari jenazah suamimu dan kita akan menguburkannya dengan layak. Setelah itu\naku akan mencari si keparat Duan Tiande itu, dan membunuhnya."'
      }), "\n", (0, import_jsx_runtime.jsxs)(_components.p, {
        children: ['Bao Xiruo orang yang sangat lembut dan tidak mementingkan diri sendiri. Ia jarang\nsekali punya pendapat pribadi. Ditambah lagi, saat ini ia merasa sangat sendirian\ndi dunia ini. Ia melihat bahwa Yan Lie bisa mengatur segala hal dengan rapi, ia\nmerasa sangat terharu. Ia berkata, "', (0, import_jsx_runtime.jsx)(_components.a, {
          href: "#xiansheng",
          title: "Tuan Yan",
          children: "Yan Xiansheng"
        }), ', aku tidak tahu bagaimana\nharus membalas kebaikanmu."']
      }), "\n", (0, import_jsx_runtime.jsxs)(_components.p, {
        children: ['YanLie menjawab dengan mantap, "', (0, import_jsx_runtime.jsx)(_components.a, {
          href: "#furen",
          title: "Nyonya",
          children: "Fu Ren"
        }), ', hidupku ini adalah karena diselamatkan oleh\nFu Ren. Meskipun aku harus melompat masuk ke dalam minyak mendidih, atau hancur jadi debu,\naku akan terus melayanimu seumur hidupku."']
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Bao Xiruo menjawab, "Aku hanya berharap kita bisa segera membalas kematian suamiku\ndan membunuh Duan Tiande secepat mungkin, supaya aku bisa segera mengikuti suamiku\nke alam lain." Ketika ia berpikir sampai di sini, air mata mulai menetes di pipinya.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: `Mereka berkuda sepanjang hari dan kemudian berhenti di sebuah penginapan kecil
di Chang'an. Yan Lie mendaftarkan diri mereka sebagai pasangan, dan hanya memesan
sebuah kamar. Bao Xiruo merasa ada yang salah di sini. Ia tidak bicara apa-apa saat
makan malam, dan ia diam-diam menyentuh pisau yang diberikan Qiu Chuji untuk memastikan
pisau itu tetap ada. Ia bertekad, "kalau ternyata dia mau macam-macam, aku akan
langsung bunuh diri."`
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yan Lie memesan dua tumpukan jerami kepada pelayan kamar. Ia menunggu sampai pelayan\nitu keluar, lalu mengatur jerami itu di lantai sebagai alas tidur. Ia berbaring\ndi atas tumpukan jerami dan menyelimuti diri dengan selimut kulit. Ia menoleh\nke Bao Xiruo dan berkata, "Selamat malam, Fu Ren." Ia memejamkan matanya.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Jantung Bao Xiruo berdegup kencang. Teringat akan suaminya yang tewas, ia merasa\nhancur di dalam. Ia duduk di situ selama satu jam lebih, sebelum menghela nafas\ndan meniup lilin. Sambil tetap mencengkeram pisaunya, ia merangkak ke tempat tidur\ndengan pakaian lengkap."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Ketika ia bangun keesokan harinya, Yan Lie sudah berkemas dan menyiapkan semuanya,\ndan sudah memesan sarapan untuk mereka berdua. Ia sangat berterima kasih untuk semua\nkebaikan Yan Lie, dan mulai mengendorkan kekuatirannya. Saat mereka sarapan, ia melihat\nada mie ayam goreng, ham, sosis, ikan asap, seporsi nasi harum, dan juga bubur kaldu."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Bao Xiruo tumbuh dan dibesarkan di tengah keluarga menengah. Meskipun menikah dengan\nYang Tiexin, ia sudah terbiasa dengan kehidupan petani. Menu sarapannya yang biasa\nadalah sayur asin dan telur asin. Kecuali Tahun Baru dan acara perkawinan, ia tidak\npernah makan makanan semewah itu. Akhirnya ia merasa kurang nyaman saat sarapan."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Setelah selesai makan, pelayan kamar datang membawa bungkusan. Saat itu Yan Lie\nsudah meninggalkan kamar. "Apa ini?" tanya Bao Xiruo.'
      }), "\n", (0, import_jsx_runtime.jsxs)(_components.p, {
        children: ['Pelayan itu menjawab, "', (0, import_jsx_runtime.jsx)(_components.a, {
          href: "#gongzi",
          title: "Tuan Muda",
          children: "Gong Zi"
        }), ' keluar segera setelah matahari terbit.\nDia membeli pakaian baru untuk Fu Ren. Dia menyuruhku mengantarkan pakaian ini supaya\nFu Ren bisa ganti pakaian." Setelah bicara ia meletakkan bungkusan itu di atas meja,\nlalu keluar.']
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Bao Xiruo membuka bungkusan itu, dan ia terkejut. Isinya ternyata seperangkat pakaian\nberkabung warna putih terbuat dari sutra, sepasang kaus kaki putih, sepatu putih,\npakaian dalam, dan juga jaket putih. Termasuk di dalamnya juga syal, pengikat rambut,\ndan aksesori lainnya. Semuanya berwarna putih. Ia berpikir, "Agak sulit untuk pemuda\nseperti dia kalau harus memikirkan semuanya." Ketika ia ganti pakaian dengan memakai\nsemua bahan yang dibeli Yan Lie, ia agak tersipu. Ia meninggalkan rumah dalam keadaan\nterburu-buru di tengah malam. Setelah mengalami petualangan tak terduga yang sangat\ntidak menyenangkan, ia dipenuhi debu dan keringat. Sekarang setelah sedikit membersihkan\ndiri, semangatnya mulai bangkit. Ketika Yan Lie kembali, diperhatikannya bahwa pemuda\nitu juga sudah berganti pakaian dengan memakai setelan berwarna yang terlihat\nmewah.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Mereka berdua berangkat lagi. Di sepanjang jalan kadang-kadang salah satu ada di depan,\nkedang-kadang mereka berdampingan. Musim semi sedang ada di puncaknya di sebelah Selatan\nSungai Yangtze. Pohon willow melambai ke bahu orang di sepanjang jalan, semerbak aroma bunga\nmemenuhi udara dan hati manusia. Saat itu tanaman mulai tumbuh di sawah-sawah."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Untuk mengalihkan perhatian Bao Xiruo dari kesedihannya, Yan Lie terus mengajaknya\nbicara mengenai topik-topik lain sekenanya. Ayah Bao Xiruo adalah seorang pelajar yang\ntidak berprestasi dari desa kecil. Suami, dan juga saudara angkatnya, sama-sama\nadalah orang yang cenderung blak-blakan dan kurang mengerti sopan-santun pergaulan.\nIa belum pernah bertemu dengan orang yang penuh sopan-santun, terpelajar, lembut,\ndan berpengetahuan luas seperti Yan Lie. Waktu mereka bicara, Bao Xiruo merasa bahwa\nsemua ucapannya, setiap kata, setiap kalimat, adalah sangat cerdas dan menggugah pikiran.\nIa tidak bisa, tapi diam-diam mulai, memandangnya dengan kagum."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: `Namun demikian, ternyata mereka terus berjalan ke arah Utara, dan mereka makin lama makin
jauh dari Lin'an. Tak hanya itu, ia juga tidak sekalipun menyinggung soal balas dendam
dan topik mengenai penguburan jenazah suaminya. Akhirnya, ia tidak tahan lagi dan bertanya,
"Yan Xiansheng, bagaimana rencanamu mengenai jenazah suamiku?"`
      }), "\n", (0, import_jsx_runtime.jsxs)(_components.p, {
        children: [`Yan Lei menjawab, "Aku bukannya tidak mau mencari jenazah suamimu dan memberikan upacara
penguburan selayaknya. Tapi aku membunuh sejumlah prajurit pemerintah waktu menolongmu.
Saat ini sangat berbahaya buat aku di situ. Begitu aku muncul di sekitar Lin'an,
para prajurit pasti akan langsung membunuhku. Selain itu sekarang ini para prajurit itu
berkeliaran di semua tempat untuk mencari Fu Ren. Bagaimanapun juga, suamimu `, (0, import_jsx_runtime.jsx)(_components.em, {
          children: "memang"
        }), '\nmembuat kejahatan dengan membunuh prajurit pemerintah. Ini kejahatan besar. Kalau\nkeluarganya sampai ditemukan, para pria akan dieksekusi mati, para wanita akan dijadikan\npelacur untuk memuaskan prajurit. Bagi aku mati bukan apa-apa, tapi kalau aku tidak\nada, dan sampai tentara menangkap Fu Ren, aku tidak bisa membayangkan bagaimana\nkonsekuensinya. Sampai di alam baka sekalipun aku akan merasa sedih sekali."\nBao Xiruo melihat betapa jujur dan tulusnya dia. Ia mengangguk. Yan Lie melanjutkan, "Aku\nsudah memikirkan masalah ini berkali-kali. Yang terpenting adalah menguburkan suamimu.\nJadi kita harus pergi ke Jiaxing, supaya aku bisa dapat uang, dan menyuruh orang untuk\nmengurus hal itu. Kalau Fu Ren ingin melakukannya sendiri, maka aku akan mengatur\nsupaya Fu Ren bisa tinggal dengan tenang di Jiaxing, dan aku akan pergi sendirian\nmenangani masalah ini."']
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Bao Xiruo merasa agak keterlaluan kalau memintanya mengambil resiko sendiri. Ia lalu\nmenjawab, "Kalau kau bisa mencari orang yang bisa diandalkan untuk mengurus masalah ini,\naku rasa itu jalan terbaik." Ia melanjutkan, "Suamiku punya saudara angkat, namanya\nGuo Xiaotian, dia tewas demi suamiku. Aku minta maaf harus merepotkanmu, kalau bisa\njuga minta tolong berikan penguburan selayaknya untuk dia juga. Aku... aku..." ia terisak.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Itu sama sekali tidak sulit." kata Yan Lie. "Serahkan saja kepadaku. Kalau soal\nbalas dendam, si bangsat Duan Tiande itu adalah pejabat pemerintah, membunuhnya bukan\nsoal gampang. Lagipula, ia akan sangat hati-hati sekarang ini. Yang bisa kita lakukan\nadalah menunggu waktu yang tepat dengan sabar."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Bao Xiruo ingin membalas dendam atas tewasnya Yan Tiexin, lalu mengikutinya ke alam baka.\nMeskipun setiap patah kata uraian Yan Lie kedengarannya benar, ia tidak tahu kapan\nsemua itu akan terlaksana. Dalam keadaan putus asa dan tidak sabar, ia menangis keras.\nsambil terisak ia berkata, "Aku sungguh tidak tahu soal balas dendam. Bahkan seorang\npendekar seperti suamiku tidak bisa mengalahkan dia. Aku... aku hanya perempuan lemah,\napa... apa yang bisa kulakukan... Biarkan saja aku mati, dan ikut suamiku, dan selesailah\nsudah semuanya."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Merasa bahwa situasinya sungguh sangat sulit, Yan Lie diam sejenak, lalu ia bertanya,\n"Fu Ren, kau percaya kepadaku?" Bao Xiruo mengangguk. Yan Lie melanjutkan, "Satu-satunya\nyang bisa kita lakukan sekarang adalah menuju ke Utara untuk menghindari prajurit.\nPara pejabat Song tidak bisa mengejar kita kalau kita ada di Utara. Segera setelah kita\nmenyeberangi Yangtze, mustinya kita sudah keluar dari bahaya. Kita tunggu sampai situasi\nagak dingin baru kembali ke Selatan untuk membalas dendam. Fu Ren, yakinlah bahwa\naku akan menuntut segala masalah keadilan bagi suamimu."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Bao Xiruo ragu-ragu, "Aku sekarang tidak punya rumah dan keluarga di dunia ini. Kalau\ntidak mengikuti jejak suamiku, bagaimana mungkin seorang perempuan seperti aku bisa\nhidup tenang di dunia ini. Wajah para prajurit yang mengepung aku malam itu sangat buas.\nKalau aku sampai jatuh ke tangan mereka, aku akan mengalami nasib yang jauh lebih mengerikan\ndaripada mati. Dan lagi orang ini bukan keluarga atau teman, masa seorang janda jalan-jalan\nbersama dengan pemuda seperti dia? Kalau aku mencoba bunuh diri sekarang, dia pasti akan\nberusaha mencegahku." Ia merasa bingung. Satu-satunya hal yang pasti baginya adalah\nbahwa masa depan pasti sangat sulit. Berpikir bolak-balik ke depan dan belakang\nseperti ini membuatnya merasa seperti diputar-putar di dalam. Selama berhari-hari\nsebelumnya ia terus-terusan meneteskan air mata. Sekarang ia sudah kehabisan air\nmata.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yan Lie angkat bicara, "Kalau Fu Ren merasa ada bagian dari rencanaku yang kurang sesuai,\ntolong katakan saja. Tidak ada yang tidak akan kulakukan untuk Fu Ren."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Melihat betapa dia sangat mendukung, Bao Xiruo merasa tidak enak karena ragu-ragu.\nSelain bunuh diri, rasanya ia tidak bisa menemukan jalan keluar lain. Merasa tidak\npunya pilihan lain, ia menundukkan kepala dan berkata, "Kau saja yang mengurusnya."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yan Lie sangat gembira, "Aku akan selalu berterima kasih Fu Ren sudah menyelamatkan\naku. Fu ren..." Bao Xiruo memotongnya, "Kau tidak perlu lagi menyebut soal itu."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yan Lie buru-buru menjawab, "Ya, ya, tentu."'
      }), "\n", (0, import_jsx_runtime.jsxs)(_components.p, {
        children: ["Malam itu, mereka berhenti di sebuah penginapan di kota Xiashi, dan masih memesan ", (0, import_jsx_runtime.jsx)(_components.em, {
          children: "hanya"
        }), "\nsatu kamar. Sejak Bao Xiruo setuju untuk mengikuti dia ke Utara, sikap Yan Lie tidak\nlagi selembut dan sesopan sebelumnya. Kadang-kadang luapan kegembiraannya bisa agak\nketerlaluan. Bao Xiruo samar-samar merasa ada sesuatu yang sepertinya kurang pantas.\nTapi karena ia tidak menunjukkan sedikitpun tanda-tanda kurang ajar, maka ia kemudian\nberpikir bahwa pemuda itu hanya agak terlalu senang karena punya kesempatan menunjukkan\nrasa terima kasihnya."]
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Mereka berdua sampai di Jiaxing sekitar tengah hari sehari kemudian, Jiaxing adalah\nkota besar di bagian Barat Zhejiang. Karena kota ini adalah pusat lalu-lintas perdagangan\ndari berbagai penjuru, maka kota ini selalu makmur. Ketika Dinasti Song pindah ke\nSelatan, Jiaxing jadi makin dekat dengan ibukota, karena itu jadi semakin makmur dan ramai."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yan Lie mengusulkan untuk mencari penginapan dan istirahat sebentar. Tapi Bao Xiruo\nberkata, "Sekarang masih siang, apa masih sempat jalan-jalan."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Pakaian Fu Ren sudah lama dan lusuh." kata Yan Lie. "Toko-toko di sini tidak jelek.\nKita harus beli pakaian baru."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Jawaban ini mengejutkan Bao Xiruo, ia perlu waktu sebentar untuk menenangkan diri dan\nmenjawab, "Bukannya baru beli kemarin? Bagaimana bisa lama dan lusuh?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Yan Lie menjawab, "Terlalu banyak debu di sepanjang jalan, baju yang dipakai dua hari\nsudah tidak lagi cerah warnanya. Lagipula, orang secantik Fu Ren apa tidak layak\nmemakai pakaian terbaik di dunia?"'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Mendengar Yan Lie memuji kecantikannya, Bao Xiruo diam-diam merasa senang, tapi ia\nmenundukkan kepala dan berkata, "Aku sedang dalam suasana..."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Oh ya, tentu, aku mengerti." kata Yan Lie.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: "Bao Xiruo tidak bicara lagi. Suaminya belum pernah memuji kecantikannya seperti ini.\nIa mencuri pandang ke arah Yan Lie, dan hanya menemukan ketulusan di wajahnya. Seketika\nitu hatinya terguncang, tapi ia tidak tahu karena sedih atau bahagia."
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Di Jiaxing, Yan Lie bertanya soal akomodasi, dan ia diarahkan ke sebuah penginapan\nterbesar di kota itu. Setelah mandi, YanLie dan Bao Xiruo menikmati makanan kecil\nbersama, duduk saling berhadapan. Bao Xiruo sebetulnya ingin meminta kamar terpisah,\ntapi ia tidak tahu harus bilang apa. Air mukanya berubah beberapa kali karena soal\nini sudah jadi beban berat di hatinya. Tak lama kemudian, Yan Lie bicara, "Fu Ren,\nanggap saja ini rumah sendiri. Aku keluar sebentar, aku akan segera kembali."'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: 'Bao Xiruo mengangguk. "Jangan terlalu banyak buang uang." katanya.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.p, {
        children: '"Sayangnya Fu Ren sedang berkabung, jadi tidak bisa pakai perhiasan. Kalaupun\naku ingin buang lebih banyak uang juga tidak bisa." kata Yan Lie.'
      }), "\n", (0, import_jsx_runtime.jsx)(_components.hr, {}), "\n", "\n", (0, import_jsx_runtime.jsxs)(_components.section, {
        "data-footnotes": true,
        className: "footnotes",
        children: [(0, import_jsx_runtime.jsx)(_components.h2, {
          className: "sr-only",
          id: "footnote-label",
          children: "Footnotes"
        }), "\n", (0, import_jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0, import_jsx_runtime.jsxs)(_components.li, {
            id: "user-content-fn-daozhang",
            children: ["\n", (0, import_jsx_runtime.jsxs)(_components.p, {
              children: ["D\xE0o Zhang (\u9053\u957F, bisa juga ditulis D\xE0o ch\xE1ng) adalah panggilan umum untuk seorang pendeta Tao, terlepas dari jabatan yang\ndipegangnya dalam sebuah perguruan, organisasi, ataupun hirarki kepemimpinan Tao lainnya. ", (0, import_jsx_runtime.jsx)(_components.a, {
                href: "#user-content-fnref-daozhang",
                "data-footnote-backref": true,
                className: "data-footnote-backref",
                "aria-label": "Back to content",
                children: "\u21A9"
              })]
            }), "\n"]
          }), "\n", (0, import_jsx_runtime.jsxs)(_components.li, {
            id: "user-content-fn-anekdot-senjata",
            children: ["\n", (0, import_jsx_runtime.jsxs)(_components.p, {
              children: ["Narasi di atas diikuti oleh sebuah anekdot dari rakyat Song tentang senjata yang dipakai itu, tetapi saya tidak melihat\nbagaimana cara kelucuan tersebut bisa diterjemahkan dengan baik ke dalam bahasa Indonesia. Tetapi kesimpulan akhir dari anekdot tersebut\ncukup penting. Intinya adalah: Karena beratnya, sekali senjata tersebut menghujam ke bawah, yang bisa dipakai untuk menangkis hanyalah\nbatok kepala kita sendiri. Artinya adalah ", (0, import_jsx_runtime.jsx)(_components.em, {
                children: "mati"
              }), ". ", (0, import_jsx_runtime.jsx)(_components.a, {
                href: "#user-content-fnref-anekdot-senjata",
                "data-footnote-backref": true,
                className: "data-footnote-backref",
                "aria-label": "Back to content",
                children: "\u21A9"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })]
    });
  }
  function MDXContent(props = {}) {
    const { wrapper: MDXLayout } = props.components || {};
    return MDXLayout ? (0, import_jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
      children: (0, import_jsx_runtime.jsx)(_createMdxContent, props)
    })) : _createMdxContent(props);
  }
  var bab1_default = MDXContent;

  // sdyxz/lib/main.jsx
  var root = import_client.default.createRoot(document.getElementById("root"));
  root.render(/* @__PURE__ */ import_react_18_2.default.createElement(bab1_default, null));
})();
