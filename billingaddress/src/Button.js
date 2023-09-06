import styles from './Button.module.css';

function Buttons(props){
    return(
        <div className="Buttons">
            <div className="form-group row">
                <div className="col-sm-12">
                  <button className={`btn-lg btn-block ${styles.btn}`} type="submit">Continue to checkout</button>
                  
                </div>
            </div>
       </div>
    )

}
export default Buttons;