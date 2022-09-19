import SpellSave from './SpellSave';
import '../../styles/Spells.css';
import SpellAttack from './SpellAttack';
import { Classes } from '../../info/Classes';

export default function Spells(props) {
  if (props.character_class === 'monk') {
    return (
      <div className="spells">
        <div className="spells_title">Ki</div>
        <SpellSave
          proficiency={props.proficiency}
          modifier={props.modifier}
          character_class={props.character_class}
        ></SpellSave>
      </div>
    );
  } else if (
    ['barbarian', 'fighter', 'rogue'].includes(props.character_class)
  ) {
    return (
      <div className="spells">
        <div className="spells_title">Spells</div>
      </div>
    );
  } else {
    return (
      <div className="spells">
        <div className="spells_title">Spells</div>
        <SpellAttack
          proficiency={props.proficiency}
          modifier={props.modifier}
          modifier_name={Classes[props.character_class].spell_modifier}
        ></SpellAttack>
        <SpellSave
          proficiency={props.proficiency}
          modifier={props.modifier}
          modifier_name={Classes[props.character_class].spell_modifier}
          character_class={props.character_class}
        ></SpellSave>
      </div>
    );
  }
}
