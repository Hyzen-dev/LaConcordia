import React from 'react';
import { Link } from 'react-router-dom';

export default function MusicSchool() {
  return (
    <div>
      <div>
        <h3>École de musique</h3>
        <h5>Effectif actuel</h5>
      </div>

      <div>
        <div>
          <h4>Formations</h4>
          <ul>
            <li>Musicale</li>
            <li>Instrumentale</li>
          </ul>
        </div>

        <div>
          <h4>Professeurs et instruments enseignés</h4>
          <div>
            <ul>
              <li>Percussions</li>
              <li>Flûtes</li>
              <li>Cuivres</li>
              <li>Trombones</li>
              <li>Classe d'éveil</li>
              <li>Saxophone</li>
              <li>Formation musicale (enfant, adulte)</li>
            </ul>
            <ul>
              <li>Jérôme Dupuich</li>
              <li>Elodie Kryslak</li>
              <li>Alexandre Chirol</li>
              <li>Cédric</li>
              <li></li>
              <li></li>
              <li>Benoît Ambrozy</li>
            </ul>
          </div>
        </div>

        <div>
          <h4>Ensembles et activités</h4>
          <ul>
            <li>Une classe d'orchestre</li>
            <li>Une batucada (ensemble de percussions)</li>
            <p>Ces groupes sont mis en place le mercredi après midi pour la classe d’orchestre et le jeudi soir pour la batucada et permet aux musiciens en herbe d’apprendre à jouer ensemble, sous la direction de Jérôme Dupuich. Ils sont également invités à se produire en public, pendant les concerts de l’Harmonie ou lors de manifestations particulières, auprès de nos ainés, par exemple.</p>
          </ul>
        </div>

        <div>
          <h4>Informations et renseignements</h4>
          <p>
            <strong>L'école de musique est ouverte du Lundi au Samedi.</strong><br />
            <span>Salle Léon Urbain, École de Musique, rue Ferrer, 62750 LOOS EN GOHELLE</span>
          </p>
          <p>Pour tout renseignement, veuillez nous contacter via <Link to={'/contact'}>cette page,</Link><br />
          ou par téléphone au +33.X.XX.XX.XX.XX</p>
        </div>

      </div>
    </div>
  )
}
