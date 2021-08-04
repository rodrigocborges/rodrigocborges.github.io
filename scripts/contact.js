const stars = [...document.getElementsByClassName('fa-star')];

function rate(stars) {
  let i;
  
  const inactive = "fa fa-star fa-2x";
  const active = `${inactive} checked`;
  const starsLength = stars.length;
  
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);

      if (star.className === inactive) {
        for (i; i >= 0; --i) stars[i].className = active;
      } else {
        for (i; i < starsLength; ++i) stars[i].className = inactive;
      }
    };
  });
}

rate(stars);

const htmlOptions = [];

const selectOptions = [
  {
    text: 'Escolha um tópico',
    value: '',
  },
  {
    text: 'Sugestão',
    value: 'sugestao',
  },
  {
    text: 'Reclamação',
    value: 'reclamacao',
  },
  {
    text: 'Dúvidas',
    value: 'duvidas',
  },
  {
    text: 'Problemas no site',
    value: 'problemas',
  }
]

selectOptions.map(({ text, value }) => {
  htmlOptions.push(`<option value="${value}">${text}</option>`);
});

const [select] = document.getElementsByTagName('select');

select.innerHTML = htmlOptions;

function validateInput(name, value, label) {
  const [errorEl] = document.getElementsByClassName(`${name}-error`);

  if (value === '') {
    errorEl.hidden = false;
    errorEl.innerText = `${label} não pode estar vazio`;
    return false;
  } else {
    errorEl.hidden = true;
    errorEl.innerText = '';
    return true;
  }
}

function formSubmit() {
  const validInputs = ['input', 'select', 'textarea'];
  const submitData = [];
  
  [...document.getElementsByClassName('form-group')]
    .map(({ children }) => {
      return [...children].filter(child => validInputs.find(valid => valid === child.tagName.toLowerCase()));
    })
    .flat()
    .map(({ labels, name, value }) => {
      const labelName = labels[0].innerHTML;
      const isValid = validateInput(name, value, labelName);

      if (isValid) {
        submitData.push({ name, value });
      }
    });

  const stars = [...document.getElementsByClassName('fa-star')].filter(star => star.className.includes('checked'));
  const [errorEl] = document.getElementsByClassName('rating-error');
  
  if (stars.length === 0) {
    errorEl.hidden = false;
    errorEl.innerText = `Você precisa dar uma nota`;
  } else {
    errorEl.hidden = true;
    errorEl.innerText = '';
    submitData.push({ name: 'rating', value: stars.length });
  }

  const formErrors = [...document.getElementsByClassName('form-error')].filter(attr => !attr.hidden);

  if (formErrors.length === 0) {
    const [form] = document.getElementsByClassName('contact-form');
    form.reset();
    stars.map(star => star.className = 'fa fa-star fa-2x');
    alert(JSON.stringify(submitData, null, 2));
  }

};

// comentário para teste de atualização
