<template>
    <BasicLayout>
        <h1>Mis Cuentas</h1>
        <SubirCuentas :getPayrolls="getPayrolls"/>
        <ListaCuentas :payrolls="payrolls" :getPayrolls="getPayrolls"/>
    </BasicLayout>
</template>

<script>
import { ref, onMounted } from "vue";
import { auth, db } from "../utils/firebase";
import BasicLayout from '@/Layouts/BasicLayout.vue';
import SubirCuentas from '@/components/Cuentas/SubirCuentas.vue';
import ListaCuentas from '@/components/Cuentas/ListaCuentas.vue';

export default {
    name: "Cuentas",
    components: {
        BasicLayout,
        SubirCuentas,
        ListaCuentas,
    },
    setup() {
      let payrolls = ref(null);
      onMounted(() => {
        getPayrolls();
      });

      const getPayrolls = async () => {
        const response = await db
          .collection(auth.currentUser.uid)
          .orderBy("date", "desc")
          .get();
        const result = [];
        response.docs.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          result.push(data);
        });
        payrolls.value = result;
      };

    return {
      payrolls,
      getPayrolls,
    };
  },
};
</script>

<style lang="scss" scoped>
.payrolls {
  margin: 50px 0;
  text-align: center;
}
</style>