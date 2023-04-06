import React from 'react'

export default function SignInForm() {

  const verification = (event) => {
    event.preventDefault()
}

  return (
    <div>
      <form method="post" onSubmit={(event) => verification(event)}>
        <fieldset>
          <input type="email" name="email" placeholder='E-mail*' />
          <input type="password" name="password" placeholder='Mot de passe*' />
          <button type="submit">Se connecter</button>
        </fieldset>
      </form>
    </div>
  )
}
