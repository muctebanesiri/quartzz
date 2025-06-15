---
title: bloatware
cssclasses:
  - ltr-class
---

Bu rehberi yazmak için yaklaşık 40 dakika vakit harcadım. 40 dakika uğraştığım bir postun 10 upvote alıp kimse tarafından görülmemesini istemem. Bu şeyi engellemek için posta upvote "eğer mümkünse all seeing award" atmanız yeterli. Bu sayede post herkes tarafından görülür.

# Bloatware nedir? Giriş.

Merhaba güzel kardeşlerim. Bildiğiniz gibi Samsung HTC Xiaomi gibi üreticiler telefonlarına silinemeyen 1-2 tane sistem uygulaması koyuyor. Mesela: Facebook, netflix, google play store, google maps ve benzeri programları örnek olarak gösterebiliriz. Bu tarz programlar telemetri verileri ayağına sizden veri çalıp raminizi ve işlemcinizi kullanır. Bu tarz programlara "Bloatware diyoruz" bu bloatware denilen programlar yüzünden de telefonunuz yavaş çalışır. Bu rehberde bunun önüne geçeceğiz.

# ADB \[Android Debugging Bridge\] nedir

adb genelde geliştiriciler tarafından; root atma, custom rom yükleme, apk yükleme gibi şeyler için kullanılıyor. Geliştiriciler için bir program işte.

# Nasıl yapılır. Bölüm 1:

Öncelikle ayarlar/telefon bilgileri/yazılım bilgileri ksımından yapım numarasını bulun. Yapım numarasını bulduktan 7 kere yapım numarasına tıklayın. 7 kere tıkladıktan sonra geliştirici ayarları açılacak. Geliştirici ayarlarını açtıktan sonra geri tuşuna basıp en alttaki "geliştirici seçenekleri" ayarını bulun. Ayarı bulduktan ayara basın. aşağıda "USB hata ayıklaması" ayarını açın. Telefonla olan işlemimiz bitti. 2. bölüme geçelim.

# İşletim sistemine göre adb kurma. Bölüm 2:

Bu rehberi GNU/Linux dağıtımı yüklü bilgisayarımla yazıyorum. windows kısmını hiç yapmadım ama büyük ihtimal yapabilirim. önce linux kısmını göstereyim.

# GNU/Linux dağıtımları

[https://dl.google.com/android/repository/platform-tools\_r30.0.5-linux.zip](https://dl.google.com/android/repository/platform-tools_r30.0.5-linux.zip) buradan programımızı indirelim. İndirdikten sonra çıkartalım. çıkarttıktan sonra klasörü açıp sağ klik ile "uçbirimde aç" kutucuğuna tıklayalım. Eğer böyle bir seçenek çıkmıyorsa terminali açıp" cd /dosyayı/çıkarttığınız/yer" yazın. Bu işlemi yaptıktan sonra: telefonunuzla uyumlu şarj alteini usbden pcye, pcden telefona takın. karşınıza gelen hata ayıklamaya izin verilsin mi sorusuna evet diyip geçin. Şimdi terminale geri dönelim.

1. ./adb shell yazıp enter'a basın
2. Silmek istediğiniz programın "com.xxxxxx.xxxxx" benzeri adını bulun. (Bulmak için netguard programını kullanabilirsiniz. Programı indirdikten sonra açıp "sağ üstteki 3 nokta/ayarlar/gelişmiş seçenekler kısmındaki ayarlardan "sistem uygulamaları yönet" kısmına basın.)
3. yukarıdaki işlemi yazdıktan sonra silmek istediğiniz programın adını yazın. Ben de mesela netflix sistem uygulaması olarak geliyor. silmek için "**pm uninstall -k --user 0 com.netflix.mediaclient"** yazmam gerekecek. Eğer her şeyi doğru yaptıysanız program silinir.
4. bundan sonra istediğiniz programı silebilirsiniz. fakat oneui, android sistemi gibi şeyleri silmeyin sakın ha. telefonunuz bozulursa sorumlusu ben değilim. he bir de telefonunuzda başka bir klavye olsa bile ana klavyenizi asla silmeyin. şifre girme ekranına girince bir bok yapamazsınız ve hard reset atmanız gerekir (yaşandı). Buradan sonra özgürsünüz. İyi eğlenceler.

# Windows için

Buradan: [https://developer.android.com/studio/releases/platform-tools](https://developer.android.com/studio/releases/platform-tools) "windows" için olanı indirin.

zip'ten çıkartın. Shift+sağ klik yapıp "powershell penceresini buradan açın"a basın

![r/KGBTR - Rehber: ADB [Bilgisayar gerektirir] ile root atmadan ve bootloader açmadan sistem uygulamarını [bloatware] kaldırın [sadece android]](https://preview.redd.it/h7pxns89aeo91.png?width=334&format=png&auto=webp&s=e009fd4c310dd2931970f02a032bae6727fbfa3f)

açtıktan sonra linuxtaki işlemleri uygulayın. kodlar gene ./adb yazınca çalışıyor.

# Mac

Hiç mac kullanmadım ama linuxtaki işlemlerin aynısıdır büyük ihtimal.

# Bu programın artısı eksisi ne?

Eksisi: yok

Artısı: Telefonunuzu De-google yapmanızı, RAM'i boşaltmanızı. ve bataryanızın ömrünü artırmanızı sağlar

# Virüs müdür?

Android'in ana sitesinden indirdiğiniz dosya neden virüs olsun?

# Son

---

## Comments

> **AutoModerator** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/ios4ds6/) • 2022-09-17
> 
> Artan pornografik içeriklerden dolayı diğer içerikler gölgede kalıyor hem bunun önüne geçmek hem de KGB'nin asıl teması olan "mizah" temasını tekrar canlandırmak için [r/NSFW\_KGBTR](https://www.reddit.com/r/NSFW_KGBTR/) adında bir sub açtık. Sizi bilgilendirmek amacıyla her gönderi altına böyle bir yapışkan yorum ekleme kararı aldık. Eğer [r/KGBTR](https://www.reddit.com/r/KGBTR/)'de pornografik içerik paylaşırsanız kural ihlalinden dolayı cezalandırılacaksınız.
> 
> *I am a bot, and this action was performed automatically. Please* [*contact the moderators of this subreddit*](https://www.reddit.com/message/compose/?to=/r/KGBTR) *if you have any questions or concerns.*

> **idiotanakin** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/ipj9yva/) • 2022-09-22
> 
> Samsung cihaz var (oneui 4.1) bu işlemi yapmak mı daha mantıklı yoksa saf android rom atmak mı?
> 
> > **IamSedatPeker** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/ipmomvg/) • 2022-09-23
> > 
> > rom atma bunu yap

> **Beyazia** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iown890/) • 2022-09-18
> 
> Aga telefonu sıfırlarsam geri gelir mi uygulamalar? Google play hizmetlerini siliyorum
> 
> > **IamSedatPeker** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iowp1e4/) • 2022-09-18
> > 
> > evet
> > 
> > > **Beyazia** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iowpafp/) • 2022-09-18
> > > 
> > > Aga bana powershell yüklenmiyor cmd ile de yapamıyorum sürekli aynı yazı çıkıyor
> > > 
> > > > **IamSedatPeker** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iowq3b5/) • 2022-09-18
> > > > 
> > > > sürekli aynı yazı çıkıyor derken? ./adb yazınca çalışmıyor mu?

> **permabanatanoc** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iowe7t5/) • 2022-09-18
> 
> All seeing award

> **anonim3490** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iotxew2/) • 2022-09-17
> 
> KGBTR DE ilk defa yararlı bir içerik gördüm ananı sikim

> **Nearby\_Guarantee8740** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iotgjna/) • 2022-09-17
> 
> !remindme 1h remindme! 1h
> 
> > **RemindMeBot** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iotgq9a/) • 2022-09-17
> > 
> > I will be messaging you in 1 hour on [**2022-09-17 18:08:46 UTC**](http://www.wolframalpha.com/input/?i=2022-09-17%2018:08:46%20UTC%20To%20Local%20Time) to remind you of [**this link**](https://www.reddit.com/r/KGBTR/comments/xgix1y/rehber_adb_bilgisayar_gerektirir_ile_root_atmadan/iotgjna/?context=3)
> > 
> > [**CLICK THIS LINK**](https://www.reddit.com/message/compose/?to=RemindMeBot&subject=Reminder&message=%5Bhttps%3A%2F%2Fwww.reddit.com%2Fr%2FKGBTR%2Fcomments%2Fxgix1y%2Frehber_adb_bilgisayar_gerektirir_ile_root_atmadan%2Fiotgjna%2F%5D%0A%0ARemindMe%21%202022-09-17%2018%3A08%3A46%20UTC) to send a PM to also be reminded and to reduce spam.
> > 
> > <sup>Parent commenter can </sup> [<sup>delete this message to hide from others.</sup>](https://www.reddit.com/message/compose/?to=RemindMeBot&subject=Delete%20Comment&message=Delete%21%20xgix1y)
> > 
> > ---
> > 
> > | [<sup>Info</sup>](https://www.reddit.com/r/RemindMeBot/comments/e1bko7/remindmebot_info_v21/) | [<sup>Custom</sup>](https://www.reddit.com/message/compose/?to=RemindMeBot&subject=Reminder&message=%5BLink%20or%20message%20inside%20square%20brackets%5D%0A%0ARemindMe%21%20Time%20period%20here) | [<sup>Your Reminders</sup>](https://www.reddit.com/message/compose/?to=RemindMeBot&subject=List%20Of%20Reminders&message=MyReminders%21) | [<sup>Feedback</sup>](https://www.reddit.com/message/compose/?to=Watchful1&subject=RemindMeBot%20Feedback) |
> > | --- | --- | --- | --- |
> > |  |

> **OneByte420** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iotf7ea/) • 2022-09-17
> 
> bazı uygulamarı silerseniz sistem soft-brick olabilir ve veri kaybına sebep olabilir onun için silmeden önce araştırın

> **\[deleted\]** • [3 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/ioslncy/) • 2022-09-17
> 
> gotten sex

> **ImMankii** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iosfiua/) • 2022-09-17
> 
> bos yapmisin gapps yuklemeden custom rom atin bitti
> 
> > **IamSedatPeker** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iosyd58/) • 2022-09-17
> > 
> > tamam kanka telefon çalınınca da twrpden veya hangisini kullanıyorsan gesture.key'i kaldırsınlar. reset atmadan telefonuna erişsinler :D
> > 
> > > **sonofabread** • [2 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iouej50/) • 2022-09-17
> > > 
> > > Custom recoverylere şifre koyabiliyorsun
> 
> **muhammetaliay** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/ioskxcn/) • 2022-09-17
> 
> Çoğu custom rom AOSP tabanlı zaten

> **TheSseyren** • [10 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/ioseex6/) • 2022-09-17
> 
> Bu konuda dikkatli olmanızı tavsiye ederim. Sistemle alakalı bir şeyi silmeniz durumunda telefon kilitlenir kalır, düzeltmek için telefonu sıfırlamak zorunda kalabilirsiniz.
> 
> ADB ile uygulama kaldırma yöntemini daha kolay yönetebilmeniz için bir program var: [https://github.com/0x192/universal-android-debloater](https://github.com/0x192/universal-android-debloater)
> 
> Ben bunu kullanıyorum. Bu program silmemeniz gereken programlar konusunda sizi uyarıyor, güvenle silebileceğiniz programları da listeliyor.

> **\[deleted\]** • [0 points](https://reddit.com/) • 2022-09-17
> 
> root atmiyoruz sonuçta fakat adb ile telefonun kök dizinine erişiyoruz muhtemelen garanti sonlanır
> 
> > **muhammetaliay** • [0 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iosksau/) • 2022-09-17
> > 
> > root atmiyoruz sonuçta fakat adb ile telefonun kök dizinine erişiyoruz muhtemelen garanti sonlanır
> > 
> > > **emonata** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iottsha/) • 2022-09-17
> > > 
> > > alakası yok cihazın fabrika yazılımıyla oynamadığın sürece garantin sonlanmaz. samsunglarda bootloader kilidi recovery değiştirdiğin zaman knox garanti sayacı var 0ise yazılımsal garantin devam ediyor eğer 1 ise yazılımsal garantin sonlanmış oluyor
> > > 
> > > **IamSedatPeker** • [5 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iot8pnz/) • 2022-09-17
> > > 
> > > hayır aq ne alaka.

> **pluginbaby23** • [\-6 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iosbu61/) • 2022-09-17
> 
> iphone al her seyi silebiliyosun
> 
> > **emonata** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iotu51i/) • 2022-09-17
> > 
> > Jailbreak atmadığın sürece donunun rengine kadar durur
> > 
> > > **pluginbaby23** • [0 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iotx0z1/) • 2022-09-17
> > > 
> > > sende iphone yok heralde su an mesaj telefon kamera galeri ayarlar disinda her uygulamayi tamamen kaldirabiliyorsun
> > > 
> > > > **emonata** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iou19fg/) • 2022-09-17
> > > > 
> > > > kanka 7 plus kullanıyorum
> > > > 
> > > > > **pluginbaby23** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iovx15h/) • 2022-09-18
> > > > > 
> > > > > e o zaman silindigini bilmen lazim. itunes store, apple tv, home, hatta ios 16.1 ile wallet bile silinebiliyor
> > > > > 
> > > > > > **emonata** • [2 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/ipna69t/) • 2022-09-23
> > > > > > 
> > > > > > uygulamalar siliniyor fakat ne yaptığın ne ettiğin görünüyor. örnek vereyim apple icloud geliştirilip duruyor atıyorum sen iclouduna pedo içerik yüklüyorsun 1veya 3 gün sonra kapında federaller oluyor iphone cihazlara çok güvenmeyin isteseler sülalenizin kızlık soyadına kadar bulurlar

> **\[deleted\]** • [3 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iosa0bz/) • 2022-09-17
> 
> eline saglik brom eger baska rehberler yapmayi dusunuyorsan seve seve yardim ederim (bootloader acma rom kurma gibi)
> 
> > **IamSedatPeker** • [2 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iosy3yz/) • 2022-09-17
> > 
> > bootloader açma rom kurma işlerini yaptım. önermem
> > 
> > > **o7-o7** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iourdqk/) • 2022-09-17
> > > 
> > > Ever bootloader sıkıntılı biraz
> > > 
> > > **\[deleted\]** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iosyd8n/) • 2022-09-17
> > > 
> > > bende yaptim, oneririm. fakat cihazdan cihaza degisiklik gosterebiliyor ornegin samsunglarda yeni nesillerde guzel bi sonuc almak pek mumkun degil cunku development yok zaten stock rom yeterince iyi fakat xiaomidir oneplustir ciddi manada fazla farkettiriyo ve kesinlikle oneririm

> **baba\_55\_baba** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/ios8euc/) • 2022-09-17
> 
> Eline emeğine sağlık kardeşim baya yararlı olucak bu eski s3 j1 mini falan vardı yapcam teşeklür ederim.
> 
> > **\[deleted\]** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iosklc5/) • 2022-09-17
> > 
> > Daha yapmadım
> > 
> > > **baba\_55\_baba** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/ioudl68/) • 2022-09-17
> > > 
> > > Daha yapmadım

> **Extension-Durian-261** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/ios8b6v/) • 2022-09-17
> 
> no emulators found diyo aq
> 
> > **IamSedatPeker** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iosy71d/) • 2022-09-17
> > 
> > telefonun driverlerını kurdun mu? (şaka değil gerçekten samsungun usb driverları oluyor)
> > 
> > > **Extension-Durian-261** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iot15zl/) • 2022-09-17
> > > 
> > > huawei

> **Ulekappa** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/ios7zhk/) • 2022-09-17
> 
> ellerine sağlık aga

> **\[deleted\]** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/ios56z6/) • 2022-09-17
> 
> newpipe öneririm en kötü telefonda bile akıcı çalışıo mp3 veya mp4 indirebiliyosun istersen youtube harici, soundcloud bandcmap filan da var.
> 
> > **\[deleted\]** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iox4x66/) • 2022-09-18
> > 
> > newpipe öneririm en kötü telefonda bile akıcı çalışıo mp3 veya mp4 indirebiliyosun istersen youtube harici, soundcloud bandcmap filan da var.
> > 
> > **o7-o7** • [1 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iourk2h/) • 2022-09-17
> > 
> > Basit müzik çalar ya da vlc
> > 
> > **pete\_\_castiglione** • [2 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/iosik8e/) • 2022-09-17
> > 
> > premium arıyorsan, azcık para verdiğine değecek, tek sefer ödemeli poweramp i öneririm.
> > 
> > **\[deleted\]** • [2 points](https://reddit.com/r/KGBTR/comments/xgix1y/comment/ios7i8s/) • 2022-09-17
> > 
> > Google music indirebilirsin yine, veya telde varsa güncellemeleri kaldırıp kullanabilirsin