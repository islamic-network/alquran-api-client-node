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
$t->surah(36); // This will return Surah Yaseen
$t->surah(36, 'en.asad'); // This will return Surah Yaseen with Muhammad Asad's English translation
```

#### Getting a Juz
To get a juz, use:
```
$t->juz(30); // This will return Juz 30 (there are only 30!)
```

#### Getting Editions, Searching and more...
Please see the complete documentation in docs/index.html (Clone the repo and open the file in a browser).

### Authors and Contributors
Meezaan-ud-Din Abdu Dhil-Jalali Wal-Ikram (@meezaan).

### Support or Contact
For support, please visit http://alquran.cloud/api or http://alquran.cloud/contact.

## Maintainers

Meezaan-ud-Din A Wal-Ikram [meezaan@islamic.network](meezaan@islamic.network)

iSecNew10 OpenSource [opensource@isecnew10.email](opensource@isecnew10.email)

---

#### License: GPL-3.0
