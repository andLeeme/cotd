
import styles from "../Cabinet/Search.module.css";
import React, { useEffect, useState } from 'react';
import axios from "axios";


export const Search = ({ ingredient, setIngredient, allIngredient, setAllIngredient }) => {
    let keyword;
    let imgPath ="안녕"
    const user_id  = "1"

    // const [allIngredient, setAllIngredient] = useState([]);
    const [autoChk, setAutoChk] = useState(false);

    const deselectedOptions = [];

    //Object.keys 주어진 객체의 속성 이름들을 일반적인 반복문과 동일한 순서로 순회되는 열거할 수 있는 배열로 반환함
    //배열의 key값만 가져와서 배열로 만듦
    for (const key in Object.keys(allIngredient)) {
        deselectedOptions[key] = (allIngredient[key].ingredient_name);
    }

    // input에 입력값이 존재하는지 확인하는 용도
    const [hasText, setHasText] = useState(false);

    // 입력 받은 input값을 저장하는 용도
    const [inputValue, setInputValue] = useState('');

    // 자동완성으로 보여줄 값들을 저장하는 용도
    const [options, setOptions] = useState(deselectedOptions);



    // useEffect(() => {
    //     axios.get("/api/getAllIngredient").then((data) => {
    //         setAllIngredient(data.data);
    //     });
    // }, []);



    useEffect(() => {

        if (inputValue === '') {
            setHasText(false);
            setOptions([]);
        } else {
            setOptions(deselectedOptions.filter((option) => {
                return option.includes(inputValue);
            }))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputValue]);
    // input을 입력할 때마다, input을 포함(includes)한 요소들만 모아 options 배열 업데이트


    // input의 onChange 이벤트 때, 입력값을 inputValue에 저장하고 hasText값 갱신
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        setHasText(true);
    };


    // 보여지는 자동완성 값 중 하나를 클릭하면 해당 값이 input에 할당
    const handleDropDownClick = (clickedOption) => {
        setInputValue([clickedOption]);
        keyword = clickedOption;
        setHasText(false);

        setInputValue('');
        keyword = '';

        addItem(clickedOption)

        // const result = ingredient.filter((el) => el.ingredient_name === clickedOption);
        // if(result[0] == null){
        //     addItem(clickedOption);
        // } else {alert("중복된 재료입니다.")}
        // console.log(result)

    };


    const findImage = (selectedItemName) => {

        //자동완성에서 선택한 clickedOption(selectedItemName)과 같은 이름으로 filter해서 imgpath반환
        const result = allIngredient.filter((el) => el.ingredient_name === selectedItemName);
        imgPath = result[0].img_path;

        return imgPath
    };



    //addItem함수
    //clickedOption은 전체 아이템 중 선택한 아이템의 ingredient_name
    const addItem = (clickedOption) => {

        //기존 술장 목록과 선택한 아이템의 이름을 비교
        const result = ingredient.filter((el) => el.ingredient_name === clickedOption);

        //같은 게 없으면addItem
        if(result[0] == null) {
        
        
            //더해줄 item
            //item의 이름은 선택한 inputvalue이고, img는 전체 목록에서 filter로 찾음(findImage함수)
        const image = findImage(clickedOption)
        const additem = {
            ingredient_name: clickedOption,
            img_path: image
        };

        //item add해주기
        // 깊은 복사하고(...ingredient) 새로 넣어주기
        setIngredient([...ingredient, additem])
        setHasText(false);
        console.log(additem)


        //DB에 넣기
            if (user_id !== null) {
              axios({
                url: "/api/itemAdd",
                method: 'post',
                data:  { user_id: user_id, ingredient_name: clickedOption }
              })
                .then(function a(response) {
                  console.log(response)
                })
                .catch(function (error) {
                  console.log(error);
                });
            }
        } else {alert("중복된 재료입니다.")}

        console.log(result)

    }


    // 삭제 버튼을 누르면, inputValue를 초기화
    const handleDeleteButtonClick = () => {
        setInputValue('');
        keyword = '';


    };


    //onFocus, onBlur일 때  
    const autoSearch = () => {
        if (autoChk === true) {
            setAutoChk(false);
            return;
        }
        setAutoChk(true);
    }


    //onKeyUp일 때
    const onSubmitSearch = (e) => {
        keyword = (e.target.value);
        if (e.key === "Enter") {
            if (keyword === null || keyword === "" || keyword === '' || keyword === undefined) {
                alert("검색어를 입력해 주세요.")
                return;
            }

            setHasText(false);
            setInputValue('');
            addItem(keyword);
            //keyword = '';

        }
    };





    return (
        <div className={styles.searchBackground}>

            <label
                id={styles.search}
                onFocus={autoSearch}
                onBlur={autoSearch}>

                <input type="text"
                    placeholder="가지고 있는 재료를 등록해주세요!"
                    onKeyUp={onSubmitSearch}
                    onChange={handleInputChange}
                    value={inputValue} />

                {/* 검색 버튼 */}
                {/* <img style={{ cursor: 'pointer' }}
                    onClick={() => {
                        keyword === null || keyword === "" || keyword === '' || keyword === undefined ?
                            alert("검색어를 입력해 주세요.") :
                            //navigate(`/search/${keyword}`)
                            setHasText(false);
                        addItem(keyword);
                    }
                    }

                    src="https://cdn-icons-png.flaticon.com/512/117/117885.png?w=826&t=st=1687330538~exp=1687331138~hmac=5daba6fdfd6334a2f7d44246d6ea431e134f4218ddcf3b503b505713c40f597b" 
                    alt="search" /> */}

                {hasText && <div id={styles.autoSearchContainer}>
                    <ul>
                        <div className={styles.deleteButton} onClick={() => { handleDeleteButtonClick() }}>&times;</div>

                        <li onClick={() => { handleDropDownClick(options[0]); }}>{options[0]}</li>
                        <li onClick={() => { handleDropDownClick(options[1]); }}>{options[1]}</li>
                        <li onClick={() => { handleDropDownClick(options[2]); }}>{options[2]}</li>
                        <li onClick={() => { handleDropDownClick(options[3]); }}>{options[3]}</li>
                        <li onClick={() => { handleDropDownClick(options[4]); }}>{options[4]}</li>

                    </ul>
                </div>
                }
            </label>
        </div>
    );
};