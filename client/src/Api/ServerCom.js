import api from '@/Api/api'

export default {
    talk(name) {
        return api().post('game', name)
    }
}