export default function Input({inputLabel}){
    return <div className="input-group">
          <p>
            <label htmlFor="">{inputLabel}</label>
            <input type="number" />
          </p>
          </div>
}