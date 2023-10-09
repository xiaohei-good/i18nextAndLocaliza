import './App.css';
import { useTranslation } from 'react-i18next';

import { useState } from 'react';
function App() {
  const { t, i18n } = useTranslation();
  const changeLngEn = () => {
    i18n.changeLanguage('en');
  };
  const changeLngZh = () => {
    i18n.changeLanguage('zh');
  };
  const [ptext, setPtext] = useState('');
  const callApi = () => {
    //fetch('https://jsonplaceholder.typicode.com/todos/1')
    fetch('https://localhost:7132/home/getuser', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbGx5LnN1bkB2aXNpb25ibHVlLm9ubWljcm9zb2Z0LmNvbSIsImZpcnN0TmFtZSI6IlNhbGx5IiwibGFzdE5hbWUiOiJTdW4iLCJuYmYiOjE2ODkyMzIzNjksImV4cCI6MTY4OTMxODc2OSwiaWF0IjoxNjg5MjMyMzY5LCJpc3MiOiJodHRwczovL2NvbGxlbmRhLmNvbSIsImF1ZCI6Imh0dHBzOi8vY29sbGVuZGEuY29tIn0.9BtuAZ2us7t8vuxUEZbw2qfmX70k6xs_XzL3fNjCLDkJwHgjkJ9GvJVoyBcKRPd755Rogrz-Hs8ie4mtpX8AYA',
      },
      method: 'Get',
      mode: 'no-cors',
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        // i18n.changeLanguage('zh', (err, t) => {
        setPtext(json.key);
        // console.log(ptext);
        // document.querySelector('p').innerHTML = t(json.completed);
        // });
      });
  };

  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  // response
  // {
  // "userId": 1,
  // "id": 1,
  // "title": "delectus aut autem",
  // "completed": false
  // }
  return (
    <div className="App">
      <div>
        <button onClick={changeLngEn} disabled={i18n.resolvedLanguage === 'en'}>
          english
        </button>
        <button onClick={changeLngZh} disabled={i18n.resolvedLanguage === 'zh'}>
          chinese
        </button>
        <h2>{t('hello')}</h2>
        <h2>{t('header.register')}</h2>
      </div>

      <div>
        <button onClick={callApi}>call api</button>
        <p>
          {t('api response')}：{t(ptext)}
        </p>
        <p>api res:{ptext}</p>
      </div>
      <span>{t('key', { count: 0 })} </span>
      <span>{t('key', { count: 50 })} </span>
    </div>
  );
}

export default App;
