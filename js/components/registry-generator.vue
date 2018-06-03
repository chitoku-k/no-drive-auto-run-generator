<template>
    <div class="main">
        <div class="selector">
            <label v-for="drive in allDrives">
                <input type="checkbox" v-model="disabledDrivesModel" :value="drive" @change="update">
                <span>{{ drive }}</span>
            </label>
        </div>
        <div class="output">
            <code>
                Windows Registry Editor Version 5.00<br>
                <br>
                [HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer]<br>
                "NoDriveAutoRun"=hex:{{ noDriveAutoRun }}
            </code>
        </div>
    </div>
</template>
<script lang="babel">
    import { mapActions, mapState, mapGetters } from 'vuex';

    export default {
        name: 'RegistryGenerator',
        data: () => ({
            disabledDrivesModel: [],
        }),
        computed: {
            ...mapGetters([
                'registryValues',
            ]),
            ...mapState([
                'allDrives',
                'disabledDrives',
            ]),
            noDriveAutoRun: {
                get() {
                    return this.registryValues.map(x => x.toString(16).toUpperCase().padStart(2, "0")).join();
                },
            },
        },
        methods: {
            ...mapActions([
                'initialize',
                'updateAutoRun',
            ]),
            update() {
                this.updateAutoRun({
                    drives: this.disabledDrivesModel,
                });
            },
        },
        created() {
            this.initialize();
        },
    };
</script>
<style scoped>
    .main {
        font-family: Helvetica, sans-serif;
    }

    .selector {
        display: grid;
        grid-gap: 0 8px;
        grid-template-columns: repeat(auto-fill, minmax(50px, auto));
        user-select: none;
    }

    .output {
        line-height: 1.2;
        border: 1px solid #c8c8c8;
        border-radius: 4px;
        background-color: #eeeeee;
        padding: 8px 20px;
        margin: 2px 0 10px;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }

    .output code {
        font-size: 12pt;
        font-family: Consolas, 'Courier New', monospace;
    }

    label span {
        text-align: center;
        width: calc(100% - 2px);
        max-width: 50px;
        margin-bottom: 8px;
        padding: 3px 0;
        display: inline-block;
        color: #f1f1f1;
        background-color: #65a8c3;
        border: 1px solid #367994;
        border-radius: 4px;
    }

    label span:hover {
        border-color: #2568b3;
    }

    label input:checked + span {
        border-color: #b1b1b1;
        background-color: #cccccc;
    }

    label input[type='checkbox'] {
        display: none;
    }
</style>
