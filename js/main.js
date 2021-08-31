'use strict'
{
  const text = document.getElementById('text');
  const time = document.getElementById('time');
  const button = document.getElementById('button');
  const result = document.getElementById('result');
  let success = 0;
  let miss = 0;
  let startTime = 0;

  let num = 0;
  
  const words = [
    'word',
    'red',
    'blue',
    'have',
    'like',
    'write',
    'number',
    'easy',
    'difficult',
    'new',
    'text',
    'main',
    'button',
    'sun',
    'store',
    'language',
    'country',
    'apple',
    'back',
    'home',
  ];  
  const store = [];
  let word;
  
  

  function setWord() {
    word = words.splice(Math.floor(Math.random()*words.length), 1)[0];
    store.push(word);
    text.textContent = word;
    num = 0;
  }
  
  function reset() {
    success = 0;
    miss = 0;
    startTime = Date.now();
    time.textContent = '';
    result.textContent = `words:${success} miss:${miss}`;
    words.push(...store.splice(0, store.length));
    setWord();
  }

  function changetext() {
    if(words.length === 0){
      text.textContent = 'FINISH';
      const clearTime = ((Date.now() - startTime)/1000).toFixed(2);
      time.textContent = `--- ${clearTime}second ---`
      return;
    }
    setWord();
  }


  function main() {
    button.addEventListener('click', () => {
      button.textContent = 'RESET';
      reset();
    });

    document.addEventListener('keydown', e => {
      if(e.key === word[num]){
        num++;
        text.textContent = '_'.repeat(num) + word.substring(num);
        if(num === word.length){
          success++;
          result.textContent = `words:${success} miss:${miss}`;
          changetext();
        }
      }else{
        if(text.textContent === `FINISH`){
          return;
        }
        miss++;
        result.textContent = `words:${success} miss:${miss}`;
      }
    });
  }
  main();

}