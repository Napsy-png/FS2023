const Form = ({ setName, setNumber, name, number, handler }) => (
  <>
    <form>
      <div>
        name: <input value={name} onChange={setName} />
      </div>
      <div>
        number: <input value={number} onChange={setNumber} />
      </div>
      <div>
        <button type="submit" onClick={handler}>add</button>
      </div>
    </form>
  </>
)
export default Form;