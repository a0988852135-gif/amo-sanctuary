(()=>{
 const palette={
  cat:'#71627f',fox:'#a08a69',wolf:'#7188a2',rabbit:'#bd929c',
  deer:'#929e82',bear:'#80644f',raven:'#6c6b82',dragon:'#925b61'
 };
 let key='cat';
 try{key=localStorage.getItem('amoAnimalTheme')||'cat'}catch{}
 if(!Object.prototype.hasOwnProperty.call(palette,key))key='cat';
 const color=palette[key],lightTheme=key==='fox'||key==='rabbit'||key==='deer';
 const root=document.documentElement;
 root.style.setProperty('--animal',color);
 root.style.setProperty('--animal-soft',`${color}44`);
 root.dataset.animal=key;
 if(document.body)document.body.dataset.diet=lightTheme?'light':'dark';
})();
