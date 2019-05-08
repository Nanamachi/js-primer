// workbox init setting
importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js"
);
workbox.core.setCacheNameDetails({ prefix: "js-primer-v1" });
workbox.googleAnalytics.initialize();
// reload asap
workbox.skipWaiting();
workbox.clientsClaim();
// precache
workbox.precaching.precacheAndRoute([
  {
    "url": "appendix/links/index.html",
    "revision": "f09b2cd27d2e65fea6d0200c037c0ecc"
  },
  {
    "url": "basic/array/index.html",
    "revision": "131169a83aa2689d37c68e42b678f32e"
  },
  {
    "url": "basic/async/img/promise-chain.png",
    "revision": "e26f9e8ec157282aeb60810f23a52a6b"
  },
  {
    "url": "basic/async/img/then-rejected-promise.png",
    "revision": "c45405c987bb1a739850f71be6d010f0"
  },
  {
    "url": "basic/async/index.html",
    "revision": "f0690b0a5a6f61ce68d25963e2530961"
  },
  {
    "url": "basic/class/index.html",
    "revision": "999f0143d3c5c2112dfb9ac3938dceb7"
  },
  {
    "url": "basic/comments/index.html",
    "revision": "4ef9d10eee863b512cffc9852e66399b"
  },
  {
    "url": "basic/condition/index.html",
    "revision": "5912df886fb6773bd254dd9dfcdd8f72"
  },
  {
    "url": "basic/data-type/index.html",
    "revision": "f5c646dded80f2f1caca9e7fdc124b64"
  },
  {
    "url": "basic/date/index.html",
    "revision": "a3a3a8d2126bedf50f13e90851096c66"
  },
  {
    "url": "basic/ecmascript/index.html",
    "revision": "a2de6890cff1a744b0dc3009d8e8ddc3"
  },
  {
    "url": "basic/error-try-catch/images/error.png",
    "revision": "dff0e4322cb06d42d699119b6f89428f"
  },
  {
    "url": "basic/error-try-catch/index.html",
    "revision": "558c4e741ca1ee279e291dfdf2472e36"
  },
  {
    "url": "basic/error-try-catch/src/error.html",
    "revision": "359cbe7900932fac79eb321c76e104b4"
  },
  {
    "url": "basic/function-declaration/index.html",
    "revision": "beb0e9bf3c1710e9f120688b4551c536"
  },
  {
    "url": "basic/function-scope/index.html",
    "revision": "33694b0975b9acd8357ca62de59d5470"
  },
  {
    "url": "basic/function-this/index.html",
    "revision": "6ad653ecc51f9e3c0ded96c403d146d0"
  },
  {
    "url": "basic/implicit-coercion/img/JavaScript-Equality-Table.png",
    "revision": "249e75cfe1f22458bfa9fe71480a6c0d"
  },
  {
    "url": "basic/implicit-coercion/index.html",
    "revision": "1e33263742a5e3d7ccc968c99648bddd"
  },
  {
    "url": "basic/index.html",
    "revision": "2c40e849d42c55ac0cc336d704b5d86e"
  },
  {
    "url": "basic/introduction/img/javascript-ecmascript.png",
    "revision": "40a83bcf5b26783fc68b7caeb792d36d"
  },
  {
    "url": "basic/introduction/index.html",
    "revision": "9014d7b2f022caf496c72117685234c4"
  },
  {
    "url": "basic/json/index.html",
    "revision": "f950708d37659528588a7a2c2cc5c36f"
  },
  {
    "url": "basic/loop/index.html",
    "revision": "3adecf23d278a1e31451efc2dedc1b5e"
  },
  {
    "url": "basic/loop/public/index.html",
    "revision": "226c5a5e385446f7b048d1b990a8f603"
  },
  {
    "url": "basic/map-and-set/index.html",
    "revision": "6172ca486d14331675fdaec4a6b4719e"
  },
  {
    "url": "basic/math/index.html",
    "revision": "d60da8617457db0165067e1c968ddb2b"
  },
  {
    "url": "basic/object/index.html",
    "revision": "a10a26d386bdddf9b5cbcaacedb48b3a"
  },
  {
    "url": "basic/operator/index.html",
    "revision": "c78363eaa03a8d6313e88d74c2a0b204"
  },
  {
    "url": "basic/other-parts/index.html",
    "revision": "ef466b19fd469463b771b77d09b29dff"
  },
  {
    "url": "basic/prototype-object/img/object-prototype.png",
    "revision": "6bbe9c151a73ec89ed45606a0b42975f"
  },
  {
    "url": "basic/prototype-object/index.html",
    "revision": "056f624a547694e8fcfc616c10b64953"
  },
  {
    "url": "basic/read-eval-print/img/syntax-error.png",
    "revision": "889dfb7dec547bc8bde6fed9566d204f"
  },
  {
    "url": "basic/read-eval-print/img/web-console.png",
    "revision": "23eb78c09ad1d984cfa76270d8467b24"
  },
  {
    "url": "basic/read-eval-print/index.html",
    "revision": "46ec7cc6c446b3db4ed5af9ed1197e9b"
  },
  {
    "url": "basic/read-eval-print/src/empty/index.html",
    "revision": "5a2a8b11dda21e4b54164d24dd751dc4"
  },
  {
    "url": "basic/read-eval-print/src/example/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/invalid/syntax-error-typo/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/invalid/syntax-error/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/runtime-error/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/statement-expression/index.html",
    "revision": "9705b7bbed1ccbc5b13b088e18f05d2e"
  },
  {
    "url": "basic/string-unicode/img/codeunit-codepoint-table.png",
    "revision": "7d065a8e65d944b1898b9de5e8d1e07e"
  },
  {
    "url": "basic/string-unicode/img/emoji-codeunit-codepoint-table.png",
    "revision": "6665ae16a9f3b2bfee3d28930988f382"
  },
  {
    "url": "basic/string-unicode/img/extenal-code-and-internal-code.png",
    "revision": "81bdae3abbfa82c8a14ce1d961bab2e5"
  },
  {
    "url": "basic/string-unicode/index.html",
    "revision": "e0eac9fe89ce34601c6de18707c18eea"
  },
  {
    "url": "basic/string/index.html",
    "revision": "880115172c5eabe297bca797edbcf270"
  },
  {
    "url": "basic/variables/index.html",
    "revision": "df2f128125dc7ed08f6deeedce2db06b"
  },
  {
    "url": "basic/wrapper-object/index.html",
    "revision": "76e677dc246e6e78705a9a53be995129"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.eot",
    "revision": "25a32416abee198dd821b0b17a198a8f"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.svg",
    "revision": "d7c639084f684d66a1bc66855d193ed8"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.ttf",
    "revision": "1dc35d25e61d819a9c357074014867ab"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.woff",
    "revision": "c8ddf1e5e5bf3682bc7bebf30f394148"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.woff2",
    "revision": "e6cf7c6ec7c2d6f670ae9d762604cb0b"
  },
  {
    "url": "gitbook/fonts/fontawesome/FontAwesome.otf",
    "revision": "5dc41d8fe329a22fa1ee9225571c843e"
  },
  {
    "url": "gitbook/gitbook-plugin-anchors/plugin.css",
    "revision": "45deda85e7ceaacadb6a51c17248ad1c"
  },
  {
    "url": "gitbook/gitbook-plugin-fontsettings/fontsettings.js",
    "revision": "fab8f6412ce18bb367635b1bcae503ca"
  },
  {
    "url": "gitbook/gitbook-plugin-fontsettings/website.css",
    "revision": "056a6db3eef3553a78f3b7e02356b2e7"
  },
  {
    "url": "gitbook/gitbook-plugin-ga/plugin.js",
    "revision": "8b0d0bfffa07cfd2675fffb1b7b6e6f4"
  },
  {
    "url": "gitbook/gitbook-plugin-github-issue-feedback/plugin.js",
    "revision": "096a3a5838459d91e482dff2e1230c84"
  },
  {
    "url": "gitbook/gitbook-plugin-highlight/ebook.css",
    "revision": "fa203ae16ad9f01f4d20061fb9e7a6cc"
  },
  {
    "url": "gitbook/gitbook-plugin-highlight/website.css",
    "revision": "acce01e3e11cbd4b3882e7732d81f954"
  },
  {
    "url": "gitbook/gitbook-plugin-js-console/console-ui.js",
    "revision": "0ca768e48d364ee90d22664568902840"
  },
  {
    "url": "gitbook/gitbook-plugin-page-toc-button/plugin.css",
    "revision": "4e7efddf5df2ea927a186116ba2aee2b"
  },
  {
    "url": "gitbook/gitbook-plugin-page-toc-button/plugin.js",
    "revision": "834dad580dcb5926f3b090502550f60d"
  },
  {
    "url": "gitbook/gitbook-plugin-sharing/buttons.js",
    "revision": "e7c1c051d685b9e7530c1a6675e6b119"
  },
  {
    "url": "gitbook/gitbook.js",
    "revision": "e53bf9037b1d1c9810486ef4c5493624"
  },
  {
    "url": "gitbook/icons/favicon.ico",
    "revision": "4724b6e29e34167169d6d9e14b8c853f"
  },
  {
    "url": "gitbook/icons/icon-128x128.png",
    "revision": "b91df37069569bafccc6936d1b2e1352"
  },
  {
    "url": "gitbook/icons/icon-144x144.png",
    "revision": "e744cdec12fa24a28b40fde9b52d7695"
  },
  {
    "url": "gitbook/icons/icon-152x152.png",
    "revision": "77dac1368e193743d56106145e1c04a9"
  },
  {
    "url": "gitbook/icons/icon-192x192.png",
    "revision": "e3682439a02773056ce1bd46e6085555"
  },
  {
    "url": "gitbook/icons/icon-384x384.png",
    "revision": "2814afaf288c99d08c584b39234d3e39"
  },
  {
    "url": "gitbook/icons/icon-512x512.png",
    "revision": "fd7a37b059ccac4d7256226883672bce"
  },
  {
    "url": "gitbook/icons/icon-72x72.png",
    "revision": "406eb5ae0057f1f40b2abf9b17cd12a4"
  },
  {
    "url": "gitbook/icons/icon-96x96.png",
    "revision": "7529c23361ebe1eaba84a6cd042a9565"
  },
  {
    "url": "gitbook/images/apple-touch-icon-precomposed-152.png",
    "revision": "77dac1368e193743d56106145e1c04a9"
  },
  {
    "url": "gitbook/images/favicon.ico",
    "revision": "4724b6e29e34167169d6d9e14b8c853f"
  },
  {
    "url": "gitbook/style.css",
    "revision": "88a3a50e3559bc577c1be0de4fcc6c6d"
  },
  {
    "url": "gitbook/theme.js",
    "revision": "176e71ac3bf185b7f08e0f6cb919f1e8"
  },
  {
    "url": "index.html",
    "revision": "e64700fe7510ea70fb23151f1e5ce753"
  },
  {
    "url": "intro/feedback/index.html",
    "revision": "cdc2741cb08445a7f26844b487316ccd"
  },
  {
    "url": "intro/index.html",
    "revision": "3b5ca58b299fa95c4a174e3df57b731a"
  },
  {
    "url": "intro/preparation/index.html",
    "revision": "5359e4cc7d343a378b3aa14424497d44"
  },
  {
    "url": "landing/css/style.css",
    "revision": "026290c57783f482c4226e004e2279e5"
  },
  {
    "url": "landing/img/cover.png",
    "revision": "fec746cff0a8b4a9fb4193d4af3d534f"
  },
  {
    "url": "landing/img/js-primer.png",
    "revision": "19d98be248101b2685bb2a74d510890f"
  },
  {
    "url": "landing/img/repo-actions-watch.png",
    "revision": "4b4cd63c1bad3861502d3127c2a2d0a2"
  },
  {
    "url": "landing/index.html",
    "revision": "1bf50123dd7fe8053c579742357ec970"
  },
  {
    "url": "outro/index.html",
    "revision": "7dd2f15ab1971cab91241a83aa1a3ac5"
  },
  {
    "url": "use-case/ajaxapp/display/img/fig-1.png",
    "revision": "15072f06aa7fd4d5fbce148bc2db975f"
  },
  {
    "url": "use-case/ajaxapp/display/index.html",
    "revision": "f17a997e5e88058d53cbd01914ef000b"
  },
  {
    "url": "use-case/ajaxapp/display/src/index.html",
    "revision": "b89416cb1388482fc234c4bf894e0e83"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/img/fig-1.png",
    "revision": "529c6091a9875e4151bbd301a9eeaeee"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/index.html",
    "revision": "eaa946a864b046b8b65ea5c84332c453"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/src/index.html",
    "revision": "59d564baee8b85ccee9e5e5eac419944"
  },
  {
    "url": "use-case/ajaxapp/index.html",
    "revision": "dea77bccf5df7602a56fc86edce97d25"
  },
  {
    "url": "use-case/ajaxapp/promise/img/fig-1.png",
    "revision": "97b1897743ee44e2fd8a9315a7af15eb"
  },
  {
    "url": "use-case/ajaxapp/promise/index.html",
    "revision": "60012d898f06c61b4001f0886867824c"
  },
  {
    "url": "use-case/ajaxapp/promise/src/index.html",
    "revision": "08f26d218b17fbc1aea4461f2a01df19"
  },
  {
    "url": "use-case/ajaxapp/src/index.html",
    "revision": "08f26d218b17fbc1aea4461f2a01df19"
  },
  {
    "url": "use-case/ajaxapp/xhr/img/fig-1.png",
    "revision": "30ae672fc36c3cf614eea13ea84dca42"
  },
  {
    "url": "use-case/ajaxapp/xhr/img/fig-2.png",
    "revision": "37814c55beb033fe5d7d40c0b45afe91"
  },
  {
    "url": "use-case/ajaxapp/xhr/index.html",
    "revision": "9a59675eb4331d3f806bbef9725b7275"
  },
  {
    "url": "use-case/ajaxapp/xhr/src/index.html",
    "revision": "45577067ec45b8853a9b639641dd7dd5"
  },
  {
    "url": "use-case/index.html",
    "revision": "97994b6f1efc1f876f4f4d81780349e2"
  },
  {
    "url": "use-case/module/index.html",
    "revision": "a6579b8e5d39cbbd779e788d63c1fda6"
  },
  {
    "url": "use-case/nodecli/argument-parse/index.html",
    "revision": "ac97305de2f64ea60b606d3898834073"
  },
  {
    "url": "use-case/nodecli/helloworld/index.html",
    "revision": "4784382b9cfad53a176aaad215b47a27"
  },
  {
    "url": "use-case/nodecli/index.html",
    "revision": "e1c40b9dd180080f4f25cae858e36839"
  },
  {
    "url": "use-case/nodecli/md-to-html/index.html",
    "revision": "9739602f6d22d987ed88acbaa713f270"
  },
  {
    "url": "use-case/nodecli/read-file/index.html",
    "revision": "afffeec615480f5ac020e7a6d59d526a"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/index.html",
    "revision": "74dd3f5c007e7b4063590d1ad07518a4"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/src/test/fixtures/expected.html",
    "revision": "98b8e1ceac14ee8d5bd405fe8fc1b2bc"
  },
  {
    "url": "use-case/setup-local-env/index.html",
    "revision": "a4bcaf91b755d1e5b70052203a9a2b31"
  },
  {
    "url": "use-case/todoapp/app-structure/img/todo-html.png",
    "revision": "a7e248a9554bc7f79bc635b4c373ed9c"
  },
  {
    "url": "use-case/todoapp/app-structure/index.html",
    "revision": "46eda3cf0b16792c3600185b67f2fd41"
  },
  {
    "url": "use-case/todoapp/app-structure/todo-html/index.html",
    "revision": "7982d73005aace941cf4c11764d8d601"
  },
  {
    "url": "use-case/todoapp/entrypoint/first-entry/index.html",
    "revision": "be5eee3981ec18c49a62181f3fa78987"
  },
  {
    "url": "use-case/todoapp/entrypoint/img/first-entry.png",
    "revision": "07fda3c2b654ee7b03f3ded0a58c1fff"
  },
  {
    "url": "use-case/todoapp/entrypoint/index.html",
    "revision": "0e39d797957d44360ce370edbc66c8d5"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-entry/index.html",
    "revision": "be5eee3981ec18c49a62181f3fa78987"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-scope/index.html",
    "revision": "363ad66f11327d4fbd4584c65dbcde65"
  },
  {
    "url": "use-case/todoapp/event-model/event-emitter/index.html",
    "revision": "4b6e0d6f957ffad0659f2076151c97ca"
  },
  {
    "url": "use-case/todoapp/event-model/index.html",
    "revision": "d17a5b11c19a1a347fe358e2f310e948"
  },
  {
    "url": "use-case/todoapp/final/create-view/index.html",
    "revision": "4b6e0d6f957ffad0659f2076151c97ca"
  },
  {
    "url": "use-case/todoapp/final/final/index.html",
    "revision": "9ffaa1daeb5dc9ad3021970002a5aa53"
  },
  {
    "url": "use-case/todoapp/final/index.html",
    "revision": "c49f13bb3386692bb4392834801e8e0e"
  },
  {
    "url": "use-case/todoapp/final/more/index.html",
    "revision": "9ffaa1daeb5dc9ad3021970002a5aa53"
  },
  {
    "url": "use-case/todoapp/form-event/add-todo-item/index.html",
    "revision": "4b6e0d6f957ffad0659f2076151c97ca"
  },
  {
    "url": "use-case/todoapp/form-event/img/add-todo-item.png",
    "revision": "044faab6418bb0d5c4a50d43be55a0ac"
  },
  {
    "url": "use-case/todoapp/form-event/img/form-event.png",
    "revision": "a193d8abc60dcc1f78c117af7a23a946"
  },
  {
    "url": "use-case/todoapp/form-event/index.html",
    "revision": "72fce75e8f40dc50b0004fd87227eb72"
  },
  {
    "url": "use-case/todoapp/form-event/prevent-event/index.html",
    "revision": "4b6e0d6f957ffad0659f2076151c97ca"
  },
  {
    "url": "use-case/todoapp/index.html",
    "revision": "af13609c14b2553e5fd624971460cc02"
  },
  {
    "url": "use-case/todoapp/update-delete/add-checkbox/index.html",
    "revision": "4b6e0d6f957ffad0659f2076151c97ca"
  },
  {
    "url": "use-case/todoapp/update-delete/delete-feature/index.html",
    "revision": "4b6e0d6f957ffad0659f2076151c97ca"
  },
  {
    "url": "use-case/todoapp/update-delete/img/input-checkbox.png",
    "revision": "44920eba3f5737a49e9cc4c0893c44dd"
  },
  {
    "url": "use-case/todoapp/update-delete/index.html",
    "revision": "dbb497c7f64c36575fadcf0c94a576db"
  },
  {
    "url": "use-case/todoapp/update-delete/input-checkbox/index.html",
    "revision": "9528b6b1e9c5c6c029843537ea4121f5"
  },
  {
    "url": "use-case/todoapp/update-delete/update-feature/index.html",
    "revision": "4b6e0d6f957ffad0659f2076151c97ca"
  }
]);