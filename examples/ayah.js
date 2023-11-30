import AlquranApiClientNode from 'alquran-api-client';

const ayahExample = () => {
  AlquranApiClientNode.getAyah('1').then((ayah) => {
    console.log(ayah);
  });
};

ayahExample();
