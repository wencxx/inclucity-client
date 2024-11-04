import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../store/authStore";
import LoginView from '../views/LoginView.vue'
import RegistereView from '../views/RegisterView.vue'
import OtpVerificationView from '../views/OtpVerificationView.vue'
import HomeView from '../views/HomeView.vue'
import NewsDetailsView from '../views/NewsDetailsView.vue'
import ApplicatonView from '../views/ApplicationView.vue'
import NewApplicantView from '../views/NewApplicantView.vue'
import RenewalView from '../views/RenewalView2.vue'
import NotificationsView from '../views/NotificationsView.vue'
import NotificationsDetailsView from '../views/NotificationsDetailsView.vue'
import ProfileView from '../views/ProfileView.vue'
import MeView from '../views/MeView.vue'
import ReceiptView from '../views/ReceiptView.vue'
import StatusView from '../views/StatusView.vue'
import SuccessfulView from '../components/Successful.vue'
import HotlinesView from '../views/HotlinesView.vue'
import RequirementsView from '../views/Requirements.vue'
import BenefitsView from '../views/BenefitsView.vue'
import FaqsView from '../views/FaqsView.vue'
import TutorialView from '../views/Tutorial.vue'

const routes = [
    {
        path: '',
        name: 'login',
        component: LoginView

    },
    {
        path: '/register',
        name: 'register',
        component: RegistereView
    },
    {
        path: '/register/otp-verification',
        name: 'otpVerification',
        component: OtpVerificationView
    },
    {
        path: '/news',
        name: 'home',
        component: HomeView,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/news/:id',
        name: 'newsDetails',
        component: NewsDetailsView,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfileView,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/me',
        name: 'me',
        component: MeView,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/notifications',
        name: 'notifications',
        component: NotificationsView,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/notifications/:id',
        name: 'notificationsDetails',
        component: NotificationsDetailsView,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/application/receipt',
        name: 'receipt',
        component: ReceiptView,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/application/status',
        name: 'status',
        component: StatusView,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/application',
        name: 'application',
        component: ApplicatonView,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/application/new-applicant',
        name: 'newApplicant',
        component: NewApplicantView,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/application/renewal',
        name: 'renewal',
        component: RenewalView,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/successful',
        name: 'successful',
        component: SuccessfulView,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/medical-hotlines',
        name: 'hotlines',
        component: HotlinesView,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/requirements-example',
        name: 'requirements',
        component: RequirementsView,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/benefits',
        name: 'benefits',
        component: BenefitsView,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/faqs',
        name: 'faqs',
        component: FaqsView,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/tutorial',
        name: 'tutorial',
        component: TutorialView,
        meta: {
            requiresAuth: true
        }
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()

    if(authStore.isAuth && to.path === '/'){
        next('/news')
    }else if(to.meta.requiresAuth && !authStore.isAuth){
        next('/')
    } else{
        next()
    }
})

export default router