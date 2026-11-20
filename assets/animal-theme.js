(()=>{
 const palette={
  cat:'#8f81a7',fox:'#a67c57',wolf:'#788fa2',rabbit:'#bd8990',
  deer:'#78896d',bear:'#8a705c',raven:'#6f7691',dragon:'#9d6e68'
 };
 let key='cat';
 try{key=localStorage.getItem('amoAnimalTheme')||'cat'}catch{}
 if(!Object.prototype.hasOwnProperty.call(palette,key))key='cat';
 const color=palette[key],herbivore=key==='rabbit'||key==='deer';
 const root=document.documentElement;
 root.style.setProperty('--animal',color);
 root.style.setProperty('--animal-soft',`${color}44`);
 root.dataset.animal=key;
 if(document.body)document.body.dataset.diet=herbivore?'herbivore':'carnivore';
})();
