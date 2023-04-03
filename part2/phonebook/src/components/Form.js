const Form = ({setName, setNumber, handler}) => (
    <>
    <form>
      <div>
        name: <input onChange={setName}/>
      </div>
      <div>
        number: <input onChange={setNumber}/>
      </div>
      <div>
        <button type="submit" onClick={handler}>add</button>
      </div>
    </form>
    </>
)
export default Form;