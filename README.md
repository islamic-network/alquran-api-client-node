## بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ

[![](https://img.shields.io/github/release/islamic-network/alquran-api-client-node.svg)](https://github.com/islamic-network/alquran-api-client-node/releases)
[![](https://img.shields.io/github/license/islamic-network/alquran-api-client-node.svg)](https://github.com/islamic-network/alquran-api-client-node/blob/master/LICENSE.md)

### Node.js Client for AlQuran API  (TypeScript compatible)
This is a Node.js API client written in TypeScript that uses the rest API at alquran.cloud to fetch Quran Ayahs, Surahs Juzs or the entire Quran.

### Work in Progress!

### Installation
The API Client is a composer package. To use it, you need to run the following:
```
yarn add alquran-api-client
```
or
```
npm i --save alquran-api-client
```

### Usage

#### Instantiate the Client
```
import AlquranApiClientNode from 'alquran-api-client';

```

#### Getting an Ayah
To get a single ayah, use:
```
AlquranApiClientNode.getAyah('1').then((ayah: Ayah) => {
    // "ayah" will be Ayah 1
});
AlquranApiClientNode.getAyah(765, 'en.pickthall').then((ayah: Ayah) => {
    // "ayah" will be Ayah 765 with Marmaduke Pickthall's English translation
});
```

#### Getting a Surah
To get a surah, use:
```
AlquranApiClientNode.getSurah(36).then((surah: Surah) => {
    // "surah" will be Surah Yaseen
});
AlquranApiClientNode.getSurah(36, 'en.saad').then((surah: Surah) => {
    // "surah" will be Surah Yaseen with Muhammad Asad's English translation
});
```

#### Getting a Juz
To get a juz, use:
```
AlquranApiClientNode.getJuz(30).then((juz: Juz) => {
    // "juz" will be Juz 30 (there are only 30!)
});
```

### Getting Editions, Searching and more...
Please see all available API methods in the [examples directory](/examples).

---

### Authors and Contributors

Meezaan-ud-Din Abdu Dhil-Jalali Wal-Ikram (@meezaan). [meezaan@islamic.network](meezaan@islamic.network)

iSecNew10 OpenSource (@iSecNew10). [opensource@isecnew10.email](opensource@isecnew10.email)

### Support or Contact
For support, please visit http://alquran.cloud/api or http://alquran.cloud/contact.

----

#### License: GPL-3.0
