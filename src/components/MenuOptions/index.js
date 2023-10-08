function MenuOptions({handleOptionClick}) {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '45%'
    }}>
        <button onClick={() => handleOptionClick('ADD')}>
            Add New Character
        </button>
        <button onClick={() => handleOptionClick('RESET')}>
            Reset All Characters
        </button>
        <button onClick={() => handleOptionClick('SAVE')} disabled>
            Save All Characters
        </button>
    </nav>
  );
}

export default MenuOptions;
