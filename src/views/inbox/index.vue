<script>
export default {
    data() {
        return {
            selectedCity: null,
            checked: true,
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ],
            messages: [
                {
                    id: '#ABC123-451',
                    status: 'Nieuw bericht',
                    content: 'Dag, Ik wil graag een melding maken van geluidsover last in onze straat. We hebben al contact gehad met...',
                    project: 'Project Zaandam Oost',
                    date: '08-08-2022, 16:50'
                },
                {
                    id: '#ABC123-452',
                    status: 'Opgepakt',
                    content: 'Goedemiddag, ik zou graag een klacht willen melden over de stank die afkomt van de werkzaamheden bij...',
                    project: 'Project Naarderwijk Almelo',
                    date: '08-08-2022, 16:50'
                },
                {
                    id: '#ABC123-454',
                    status: 'Nieuwe reactie',
                    content: 'Dag, Ik neem contact met je op i.v.m. het afval dat wij sinds vorige week vrijdag in onze straat hebben ligg...',
                    project: 'Project Randweg Amsterdam',
                    date: '07-08-2022, 13:35'
                },
                {
                    id: '#ABC123-453',
                    status: 'Wacht op reactie',
                    content: 'RE: Dag Janine, Bedankt voor je bericht over dezesituatie. Dit zou natuurlijk niet mogen gebeuren...',
                    project: 'Project Eemshaven',
                    date: '08-08-2022 11:45'
                },
                {
                    id: '#ABC123-455',
                    status: 'Ticket gesloten',
                    content: 'Hi, ik zou graag een omgevingsmanager willen zien. Ik heb voorkeur voor op de plaats van het ongeval a...',
                    project: 'Project Maarden Arnhem',
                    date: '07-08-2022, 13:35'
                },
                {
                    id: '#ABC123-456',
                    status: 'Wacht op reactie',
                    content: 'RE: Dag Janine, Bedankt voor je bericht over dezesituatie. Dit zou natuurlijk niet mogen gebeuren...',
                    project: 'Project Eemshaven',
                    date: '08-08-2022 11:45'
                },
                {
                    id: '#ABC123-457',
                    status: 'Nieuw bericht',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vitae amet dolore quia earum laudantium libero ipsam perferendis sit tempora.',
                    project: 'Project Zaandam West',
                    date: '07-08-2022, 13:35'
                },
            ]
        };
    },
    computed: {
        sortedMessages() {
            return this.messages.sort((a, b) => {
                const textA = a.id.toUpperCase();
                const textB = b.id.toUpperCase();
                if (this.checked) {
                    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                } else {
                    return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
                }
            });
        }
    }
};
</script>
<template>
    <div class="grid inbox">
        <div class="col-fixed">
            <div class="flex gap-2 align-items-center">
                <h2 class="mb-0 heading">Inbox</h2>
                <Dropdown v-model="selectedCity" showClear editable :options="cities" optionLabel="name"
                    placeholder="Project" />
                <ToggleButton v-model="checked" onLabel="Abc" offLabel="Abc" onIcon="pi pi-sort-alpha-up"
                    offIcon="pi pi-sort-alpha-down-alt" class="filter-btn" />
            </div>
            <div class="inbox-sidebar">
                <div v-for="message in sortedMessages" :key="message.id">
                    <Card>
                        <template #title>
                            <div class="flex justify-content-between">
                                <h5 class="mb-0"> {{ message.id }}</h5>
                                <Badge :value="message.status" :severity="message.status == 'Nieuw bericht' ? '' :
                                    message.status == 'Opgepakt' ? 'info' :
                                        message.status == 'Nieuwe reactie' ? 'warning' :
                                            message.status == 'Wacht op reactie' ? 'success' :
                                                message.status == 'Ticket gesloten' ? 'danger' : ''">
                                </Badge>
                            </div>
                        </template>
                        <template #content>
                            <p class="mb-0">
                                {{ message.content }}
                            </p>
                        </template>
                        <template #footer>
                            <div class="flex justify-content-between">
                                <p class="mb-0">{{ message.project }}</p>
                                <p class="date mb-0">{{ message.date }}</p>
                            </div>
                        </template>
                    </Card>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="img-box">
                <img src="@/assets/image/empty-inbox.svg" alt="logo" class="img-fluid" />
                <h4>Selecteer een bericht en verstuur een reactie </h4>
            </div>
        </div>
    </div>
</template> 
