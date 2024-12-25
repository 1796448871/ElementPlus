<template>
  <el-container>
    <el-form :model="form" class="exchange-form">
      <el-form-item label="从货币" label-width="80px">
        <!-- select是选择的,提交给表单的 -->
         <!-- option自然是选项 -->
        <el-select v-model="form.fromCurrency" placeholder="选择货币">
          <el-option v-for="curre in allCurrencies" :lable="curre":value="curre"  />
        </el-select>
      </el-form-item>
      <el-form-item label="到货币" label-width="80px">
        <el-select v-model="form.toCurrency" placeholder="选择货币">
          <el-option v-for="curre in allCurrencies" :lable="curre":value="curre" />
        </el-select>
      </el-form-item>
      <el-form-item label="金额" label-width="80px">
        <el-input v-model="form.amount" type="number" placeholder="输入金额" />
      </el-form-item>
      <el-form-item>
        <el-button  type="primary" @click="exchagne()" >兑换</el-button>
      </el-form-item>
    </el-form>
    <div v-if="result" class="result">
      <p>兑换结果:{{ result }}</p>
    </div>
  </el-container>
</template>

<!-- script不是ts,上面的内容就不会有报错显示 -->
<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "../axios";


// 应该同意,汇率都叫amount
interface ExchangeInfo{
  fromCurrency:string
  toCurrency:string
  rate:number
}

const result =ref<number |null>(null)
const rates=ref<ExchangeInfo[]>([])


const form=ref({
  fromCurrency:'',
  toCurrency:'',
  amount:0
})


// 声明为空的数组,后续存储所有汇率(RMB、USD等等)
const allCurrencies=ref<string[]>([])

const fetchCurrencies=async()=>{
  try{
  // 注意res是如何得到后端数据的,get之后立马写上类型<Type[]>且是数组接收
  const res =await axios.get<ExchangeInfo[]>('/exchangeRates')//await和async总是成对出现
  rates.value=res.data
  console.log(rates.value  );
  // 用Set确保不重复,下面代码中map是转化成字典,flat是二维降成一维
  allCurrencies.value=[...new Set(res.data.map((rate:ExchangeInfo)=>[rate.fromCurrency,rate.toCurrency]).flat())]
  }catch(error){
console.log(error);
  }
}


const exchagne =()=>{
  // 确认From和To都相同的rate
  const rate =rates.value.find((temp)=>
  temp.fromCurrency===form.value.fromCurrency&&
  temp.toCurrency===form.value.toCurrency
  )?.rate;
  // 因为后端字段问题,amount是找不到的

  console.log(rate);
  
  if(rate){
    result.value=form.value.amount *rate
  }else{
    result.value=null
  }
}




onMounted(fetchCurrencies)



</script>

<style  scoped>
.exchange-form {
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.result {
  margin-top: 20px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
}
</style>
