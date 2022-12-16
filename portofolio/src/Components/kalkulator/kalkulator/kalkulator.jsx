import React, { useState } from 'react'
import '../scss/main.css'

import Display from '../display/display'
import Button from '../button/button'

function Kalkulator(){
       
        const [nomerDisplay1, setNomerDisplay1] = useState('')
        const [nomerDisplay2, setNomerDisplay2] = useState('')
        const [operatorKal, setOperatorKal] = useState('') 
        const [hasilPen, setHasilPen] = useState('')
           
        const [operator, setOperator] = useState(false)
        const [operator2, setOperator2] = useState(true)
        const [firstClick, setFirstClick] = useState(false)
        const [hitungFirst, setHitungFirst] = useState(false)
    
        const [calculo, setCalculo] = useState({
            'firstNum': '',
            'operator': '',
            'secondNum': '',
            'lastNum': ''
        })

        const terimaNilai = (num) => {
            if(operator === false){
                if(hitungFirst){
                    clearValues(num, true)
                    setHitungFirst(false)
                }if( num === '.'){
                    calculo.firstNum += num
                    setNomerDisplay1(nomerDisplay1 + num)
                    calculo.lastNum = ''
                    }else if (num === 'backspace'){
                    setCalculo({ 
                        'firstNum': calculo.firstNum.slice(0, -1),
                        'operator': '',
                        'secondNum': ''
                    })
                    setNomerDisplay1(nomerDisplay1)   
                }else{ 
                    calculo.firstNum += num
                    setNomerDisplay1(nomerDisplay1 + num)
                    calculo.lastNum = ''
                }
            }else{
                if (num === '.'){
                    calculo.secondNum += num
                    setNomerDisplay2(nomerDisplay2 + num)
                }else if(num === 'backspace'){
                    setCalculo({
                        'firstNum': calculo.firstNum,
                        'operator': calculo.operator,
                        'secondNum': calculo.secondNum.slice(0, -1),
                    })
                }else{
                    calculo.secondNum += num
                    setNomerDisplay2(nomerDisplay2 + num)
                }
            }
        }

        const acceptOperator = (num) => {
            calculo['operator'] = num
            setOperatorKal(num)
            setOperator(true)
            setOperator2(false)

            if(firstClick){
                setCalculo({
                'firstNum': calculo.lastNum,
                'operator': calculo.operator,
                'secondNum': '',
                })
                setNomerDisplay1(calculo.lastNum)
                setNomerDisplay2('')   
            }

            setFirstClick(true)
        }

        const Operasi = (num) => {
            const operasi = {
                '+': (num1, num2) => (parseFloat(num1) + parseFloat(num2)),
                '-': (num1, num2) => (parseFloat(num1) - parseFloat(num2)),
                '/': (num1, num2) => (parseFloat(num1) / parseFloat(num2)),
                '%': (num1) => num1 / 100,
                '*': (num1, num2) => (parseFloat(num1) * parseFloat(num2)),
            }
            
            let result = operasi[calculo['operator']](calculo.firstNum, calculo.secondNum)
            calculo.lastNum = result
            setHasilPen(result)
            setOperator2(true)
            setOperator(false)
            setHitungFirst(true)
        }

        const clearValues = (num, hitung) => {
            if(hitung){ 
                setCalculo({
                    'firstNum': num,
                    'operator': calculo.operator,
                    'secondNum': '',  
                })

                setFirstClick(false)
                setHasilPen('')
                setNomerDisplay1('')
                setNomerDisplay2('')
                setOperatorKal('')
            }else{
                setCalculo({
                    'firstNum': '',
                    'operator': calculo.operator,
                    'secondNum': '',  
                })
    
                setFirstClick(false)
                setHasilPen('')
                setNomerDisplay1('')
                setNomerDisplay2('')
                setOperatorKal('')
            }
        }
        
        const showError = () => {
            setHasilPen('Error')
        }
     
        const calcula = (num) => {
            if (!isNaN(num) || num === '.' || num === 'backspace'){
                terimaNilai(num)
            }else if ((num === '+' || num === '-' || num === '/' || num === '*' || num === '%') & operator2){
                acceptOperator(num)
            }else if(num === 'C'){
                clearValues()
            }else if(num === '='){
                if(calculo.secondNum !== '' || calculo.firstNum !== ''){
                    Operasi(num)
                }else{
                    showError()
                }
            }
        }
    
    return(
        <section className = 'kalkulator ' >
            <Display
                hasil = {hasilPen} 
                nomer1 = {calculo.firstNum}
                nomer2 = {calculo.secondNum}
                operator = {operatorKal}
            />
            <Button calcula = {calcula} />
      </section>
    )
}

export default Kalkulator