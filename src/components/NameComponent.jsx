

function NameComponent({ name }) {
    const [firstName, lastName] = name.split(' ');
  
    return (
      <div>
        <div>{firstName}</div>
        <div>{lastName}</div>
      </div>
    );
  }
  
  export default NameComponent;