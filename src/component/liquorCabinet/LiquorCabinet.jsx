
import styles from "./LiquorCabinet.module.css";
import { Cabinet } from "./Cabinet/Cabinet"
import { Static } from "./Static/Static"


export const LiquorCabinet = ( { allIngredient, setAllIngredient, allRecipe, setAllRecipe, ingredient, setIngredient, allRecipeIng, setAllRecipeIng }) => {

    // const[allRecipe, setAllRecipe] = useState([]);

    // useEffect(() => {
    //     axios.get("/api/getAllRecipe").then((data) => {
    //         //allRecipe에 담기
    //         setAllRecipe(data.data);
    //     });
    // }, []);

    return (
        <div className={styles.case}>
            <Cabinet allIngredient = { allIngredient }  setAllIngredient = { setAllIngredient } ingredient = {ingredient} setIngredient = {setIngredient}/>
            <Static allRecipe = { allRecipe } ingredient = {ingredient} setIngredient = {setIngredient} allRecipeIng = {allRecipeIng} setAllRecipeIng = {setAllRecipeIng}/>
        </div>
    );
};