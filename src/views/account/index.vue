<template>
  <div class="personal">
    <div class="grey_bg">
      <div class="content">
        <!-- 内容 -->
        <section class="list">
          <!-- 待循环 -->
          <div class="card card-profile">
            <div class="card-main">
              <ul class="card-inner essay-card">
                <li>
                  <section class="section">
                    <div class="section-header">
                      <h1>我的账号</h1>
                    </div>
                    <div class="section-body">
                      <h2 class="section-title">欢迎, {{ name }}!</h2>
                      <p class="section-lead">{{ e_mail }}</p>
                      <div class="row mt-sm-4">
                        <div class="col-lg-6">
                          <ChangePass v-on:alterPass="changePass" />
                        </div>
                        <div class="col-lg-6">
                          <PersonAccount
                            :visible="visible"
                            v-on:getPersonal="getPersonal"
                            v-on:setUserInfo="setUserInfo"
                          />
                        </div>
                        <div class="col-lg-6">
                          <DeleteInfo v-on:removePass="removePass" />
                        </div>
                      </div>
                    </div>
                  </section>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { JSEncrypt } from 'jsencrypt'
import ChangePass from './components/changePass'
import DeleteInfo from './components/deleteInfo'
import PersonAccount from './components/personAccount'
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
import { AlterAlert, DelAlert, SetAlert } from '@/utils/swal'
export default {
  name: 'personal',
  components: { ChangePass, DeleteInfo, PersonAccount },
  data() {
    return {}
  },
  methods: {
    ...mapMutations(['SET_VISIBLE']),
    ...mapActions(['alterPass', 'deleteUser', 'setInfo', 'getInfo']),
    /**
     * 修改密码
     * @param {Object} alterData 新旧密码
     */
    changePass(alterData) {
      this.alterPass(alterData).then(() => {
        this.alertAlter()
      })
    },

    async setUserInfo(Info) {
      try {
        await this.setInfo(Info)
        this.alertSet()
      } catch (error) {
        this.alertSet()
      }
    },
    getPersonal() {
      this.getInfo({ params: { username: this.name } })
    },
    /**
     *  删除账号
     * @property {Object} DelData 用户名
     */
    removePass() {
      const DelData = { username: this.name }
      this.deleteUser(DelData)
        .then(() => {
          this.alertDel()
        })
        .catch(() => {
          this.alertDel()
        })
    },
    alertAlter() {
      AlterAlert(this.status)
    },
    alertDel() {
      DelAlert(this.status)
    },
    alertSet() {
      SetAlert(this.status).then(() => {
        this.SET_VISIBLE(false)
      })
    }
  },
  computed: {
    ...mapGetters(['e_mail', 'name']),
    ...mapState({
      status: (state) => state.account.status,
      visible: (state) => state.account.visible
    })
  }
}
</script>
<style scoped lang="stylus">

  .section .section-header {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
    background-color: #6777ef;
    border-radius: 3px;
    border: none;
    position: relative;
    padding: 20px;
  }
   .section .section-header h1 {
    margin-bottom: 0;
    font-weight: 700;
    display: inline-block;
    font-size: 24px;
    margin-top: 3px;
    color: #fff;
  }
   .section > *:first-child {
    margin-top: -7px;
  }
   .section .section-title:before {
    content: ' ';
    border-radius: 5px;
    height: 8px;
    width: 30px;
    background-color: #6777ef;
    display: inline-block;
    margin-top: 6px;
    margin-right: 15px;
  }
.card-profile {
  margin-top: 0;
}
  
</style>
