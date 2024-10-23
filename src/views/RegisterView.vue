<template>
    <section class="font-poppins h-screen">
        <div class="flex flex-col lg:items-center h-screen py-14 overflow-auto" id="container">
            <!-- logo here -->
            <div class="w-full flex justify-center">
                <img src="../assets/logo.png" alt="logo" class="w-3/5 md:w-2/6 lg:w-1/6">
            </div>
            <!-- form -->
            <p v-if="existingEmail" class="text-start bg-red-500 pl-3 text-white py-1 rounded lg:w-2/4 flex items-center gap-x-2">
                <Icon icon="material-symbols-light:warning-outline" class="text-2xl" />
                <span class="mt-1">Email already taken</span>
            </p>
            <p v-if="errorRegistering" class="text-start bg-red-500 pl-3 text-white py-1 rounded lg:w-2/4 flex items-center gap-x-2">
                <Icon icon="material-symbols-light:warning-outline" class="text-2xl" />
                <span class="mt-1">Something went wrong</span>
            </p>
            <form @submit.prevent="register()" class="flex flex-col lg:grid lg:place-content-center lg:grid-cols-2 lg:w-2/4 items-center gap-x-5 gap-y-5">
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                    <label class="font-semibold text-lg">First Name</label>
                    <input type="text" placeholder="Firstname" class="pl-3 border border-gray-500 h-10 rounded-md" v-model="firstName" required>
                </div>
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                    <label class="font-semibold text-lg">Middle Name</label>
                    <input type="text" placeholder="Middlename" class="pl-3 border border-gray-500 h-10 rounded-md" v-model="middleName" required>
                </div>
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                    <label class="font-semibold text-lg">Last Name</label>
                    <input type="text" placeholder="Lastname" class="pl-3 border border-gray-500 h-10 rounded-md" v-model="lastName" required>
                </div>
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                    <label class="font-semibold text-lg">Email</label>
                    <input type="text" placeholder="Email" class="pl-3 border border-gray-500 h-10 rounded-md" v-model="email" required>
                </div>
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                    <label class="font-semibold text-lg">Password</label>
                    <div class="w-full border border-gray-500 flex items-center rounded-md overflow-hidden group focus-within:outline outline-black outline-1">
                        <input :type="passwordType" placeholder="Password" class="pl-3 w-full h-10 focus:outline-none" v-model="password" required>
                        <Icon :icon="passwordIconType" class="text-2xl mr-2 bg-white" @click="toggleShowPassword()" />
                    </div>
                </div>
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                    <label class="font-semibold text-lg">Contact Number</label>
                    <input type="number" placeholder="639XXXXXXXXX" class="pl-3 border border-gray-500 h-10 rounded-md" v-model="contactNumber" required>
                </div>
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                    <label class="font-semibold text-lg">Address</label>
                    <!-- <input type="text" placeholder="Address" class="pl-3 border border-gray-500 h-10 rounded-md" v-model="address" required> -->
                     <select id="cityBarangay" class="pl-3 border border-gray-500 h-10 rounded-md" v-model="address" required>
                        <option value="">Select Barangay</option>
                        <optgroup label="Angat">
                            <option value="Banaban">Banaban</option>
                            <option value="Baybay">Baybay</option>
                            <option value="Binagbag">Binagbag</option>
                            <option value="Donacion">Donacion</option>
                            <option value="Encanto">Encanto</option>
                            <option value="Laog">Laog</option>
                            <option value="Marungko">Marungko</option>
                            <option value="Niugan">Niugan</option>
                            <option value="Paltok">Paltok</option>
                            <option value="Pulong Yantok">Pulong Yantok</option>
                            <option value="San Roque">San Roque</option>
                            <option value="Santa Cruz">Santa Cruz</option>
                            <option value="Santo Cristo">Santo Cristo</option>
                            <option value="Sulucan">Sulucan</option>
                            <option value="Taboc">Taboc</option>
                            <option value="Banaban Proper">Banaban Proper</option>
                        </optgroup>
                        <optgroup label="Balagtas (Bigaa)">
                            <option value="Borol 1st">Borol 1st</option>
                            <option value="Borol 2nd">Borol 2nd</option>
                            <option value="Dalig">Dalig</option>
                            <option value="Longos">Longos</option>
                            <option value="Panginay">Panginay</option>
                            <option value="Pulong Gubat">Pulong Gubat</option>
                            <option value="Santol">Santol</option>
                            <option value="Wawa">Wawa</option>
                        </optgroup>
                        <optgroup label="Baliuag">
                            <option value="Bagong Nayon">Bagong Nayon</option>
                            <option value="Barangca">Barangca</option>
                            <option value="Calantipay">Calantipay</option>
                            <option value="Catulinan">Catulinan</option>
                            <option value="Concepcion">Concepcion</option>
                            <option value="Makinabangt">Makinabangt</option>
                            <option value="Mapulang Lupa">Mapulang Lupa</option>
                            <option value="Matangtubig">Matangtubig</option>
                            <option value="Paitan">Paitan</option>
                            <option value="Pagala">Pagala</option>
                            <option value="Piel">Piel</option>
                            <option value="Pinagbarilan">Pinagbarilan</option>
                            <option value="Sabang">Sabang</option>
                            <option value="San Jose">San Jose</option>
                            <option value="Santa Barbara">Santa Barbara</option>
                            <option value="Santo Cristo">Santo Cristo</option>
                            <option value="Subic">Subic</option>
                            <option value="Tiaong">Tiaong</option>
                            <option value="Tangos   ">Tangos   </option>
                            <option value="Tibag">Tibag</option>
                            <option value="Tarcan">Tarcan</option>
                            <option value="Tilapayong">Tilapayong</option>
                            <option value="Tilapayong">Virgen Delas Flores</option>
                        </optgroup>
                        <optgroup label="Bocaue">
                            <option value="Antipona">Antipona</option>
                            <option value="Bagumbayan">Bagumbayan</option>
                            <option value="Bambang">Bambang</option>
                            <option value="Biñang 1st">Biñang 1st</option>
                            <option value="Biñang 2nd">Biñang 2nd</option>
                            <option value="Bolacan">Bolacan</option>
                            <option value="Bunducan">Bunducan</option>
                            <option value="Bunlo">Bunlo</option>
                            <option value="Caingin">Caingin</option>
                            <option value="Duhat">Duhat</option>
                            <option value="Igulot">Igulot</option>
                            <option value="Lolomboy">Lolomboy</option>
                            <option value="Sulucan">Sulucan</option>
                            <option value="Tambubong">Tambubong</option>
                            <option value="Turo">Turo</option>
                            <option value="Wakas">Wakas</option>
                        </optgroup>
                        <optgroup label="Bulakan">
                            <option value="Bagumbayan">Bagumbayan</option>
                            <option value="Balubad">Balubad</option>
                            <option value="Bambang">Bambang</option>
                            <option value="Matungao">Matungao</option>
                            <option value="Maysantol">Maysantol</option>
                            <option value="Perez">Perez</option>
                            <option value="Pitpitan">Pitpitan</option>
                            <option value="San Francisco">San Francisco</option>
                            <option value="San Jose">San Jose</option>
                            <option value="Santa Ana">Santa Ana</option>
                            <option value="Taliptip">Taliptip</option>
                        </optgroup>
                        <optgroup label="Bustos">
                            <option value="Bonga Mayor">Bonga Mayor</option>
                            <option value="Bonga Menor">Bonga Menor</option>
                            <option value="Camachilihan">Camachilihan</option>
                            <option value="Cambaog">Cambaog</option>
                            <option value="Liciada">Liciada</option>
                            <option value="Malamig">Malamig</option>
                            <option value="Malibay">Malibay</option>
                            <option value="Talampas">Talampas</option>
                            <option value="Tanawan">Tanawan</option>
                            <option value="Tibagan">Tibagan</option>
                        </optgroup>
                        <optgroup label="Calumpit">
                            <option value="Balungao">Balungao</option>
                            <option value="Barangca">Barangca</option>
                            <option value="Bulusan">Bulusan</option>
                            <option value="Calumpang">Calumpang</option>
                            <option value="Corazon">Corazon</option>
                            <option value="Gatbuca">Gatbuca</option>
                            <option value="Gugo">Gugo</option>
                            <option value="Iba O'Este">Iba O'Este</option>
                            <option value="Meyto">Meyto</option>
                            <option value="Panducot">Panducot</option>
                            <option value="Poblacion">Poblacion</option>
                            <option value="Pungo">Pungo</option>
                            <option value="San Marcos">San Marcos</option>
                            <option value="San Miguel">San Miguel</option>
                            <option value="Santa Lucia">Santa Lucia</option>
                            <option value="Santo Niño">Santo Niño</option>
                            <option value="Sapang Bayan">Sapang Bayan</option>
                            <option value="Sapang Palay">Sapang Palay</option>
                        </optgroup>
                        <optgroup label="Doña Remedios Trinidad">
                            <option value="Bayabas">Bayabas</option>
                            <option value="Camachin">Camachin</option>
                            <option value="Camachile">Camachile</option>
                            <option value="Kalawakan">Kalawakan</option>
                            <option value="Kabayunan">Kabayunan</option>
                            <option value="Pulong Sampalok">Pulong Sampalok</option>
                            <option value="Talbak">Talbak</option>
                        </optgroup>
                        <optgroup label="Guiguinto">
                            <option value="Cutcut">Cutcut</option>
                            <option value="Daungan">Daungan</option>
                            <option value="Ilang-ilang">Ilang-ilang</option>
                            <option value="Malis">Malis</option>
                            <option value="Poblacion">Poblacion</option>
                            <option value="Pulong Gubat">Pulong Gubat</option>
                            <option value="Santa Cruz">Santa Cruz</option>
                            <option value="Santa Rita">Santa Rita</option>
                            <option value="Tabe">Tabe</option>
                            <option value="Talbak">Talbak</option>
                        </optgroup>
                        <optgroup label="Hagonoy">
                            <option value="Hagonoy">Hagonoy</option>
                            <option value="Carillo">Carillo</option>
                            <option value="Iba">Iba</option>
                            <option value="Mercado">Mercado</option>
                            <option value="Palapat">Palapat</option>
                            <option value="Pugad">Pugad</option>
                            <option value="San Agustin">San Agustin</option>
                            <option value="San Isidro">San Isidro</option>
                            <option value="San Jose">San Jose</option>
                            <option value="San Juan">San Juan</option>
                            <option value="San Miguel">San Miguel</option>
                            <option value="San Nicolas">San Nicolas</option>
                            <option value="San Pablo">San Pablo</option>
                            <option value="San Pedro">San Pedro</option>
                            <option value="Santa Cruz">Santa Cruz</option>
                            <option value="Santa Elena">Santa Elena</option>
                            <option value="Santa Monica">Santa Monica</option>
                            <option value="Santo Niño">Santo Niño</option>
                            <option value="Sagrada Familia">Sagrada Familia</option>
                            <option value="Tampok">Tampok</option>
                            <option value="Tibaguin">Tibaguin</option>
                        </optgroup>
                        <optgroup label="Malolos">
                            <option value="Anilao">Anilao</option>
                            <option value="Atlag">Atlag</option>
                            <option value="Babatnin">Babatnin</option>
                            <option value="Bagna">Bagna</option>
                            <option value="Bangkong Malapad">Bangkong Malapad</option>
                            <option value="Bulihan">Bulihan</option>
                            <option value="Bungahan">Bungahan</option>
                            <option value="Caingin">Caingin</option>
                            <option value="Caliligawan">Caliligawan</option>
                            <option value="Canalate">Canalate</option>
                            <option value="Caniogan">Caniogan</option>
                            <option value="Crispiniano C. Valenzuela">Crispiniano C. Valenzuela</option>
                            <option value="Dakila">Dakila</option>
                            <option value="Guinhawa">Guinhawa</option>
                            <option value="Liyang">Liyang</option>
                            <option value="Lugam">Lugam</option>
                            <option value="Look 1st">Look 1st</option>
                            <option value="Look 2nd">Look 2nd</option>
                            <option value="Longos">Longos</option>
                            <option value="Mabolo">Mabolo</option>
                            <option value="Mambog">Mambog</option>
                            <option value="Masile">Masile</option>
                            <option value="Matimbo">Matimbo</option>
                            <option value="Mojon">Mojon</option>
                            <option value="Namayan">Namayan</option>
                            <option value="Niugan">Niugan</option>
                            <option value="Pamarawan">Pamarawan</option>
                            <option value="Panasahan">Panasahan</option>
                            <option value="Pinagbakahan">Pinagbakahan</option>
                            <option value="San Agustin">San Agustin</option>
                            <option value="San Gabriel">San Gabriel</option>
                            <option value="San Juan">San Juan</option>
                            <option value="San Pablo">San Pablo</option>
                            <option value="Santiago">Santiago</option>
                            <option value="Santor">Santor</option>
                            <option value="Santisima Trinidad">Santisima Trinidad</option>
                            <option value="Sumapang Bata">Sumapang Bata</option>
                            <option value="Sumapang Matanda">Sumapang Matanda</option>
                            <option value="Tikay">Tikay</option>
                        </optgroup>
                        <optgroup label="Marilao">
                            <option value="Abangan Norte">Abangan Norte</option>
                            <option value="Abangan Sur">Abangan Sur</option>
                            <option value="Ibayo">Ibayo</option>
                            <option value="Lambakin">Lambakin</option>
                            <option value="Lias">Lias</option>
                            <option value="Nagbalon">Nagbalon</option>
                            <option value="Poblacion 1">Poblacion 1</option>
                            <option value="Poblacion 2">Poblacion 2</option>
                            <option value="Prenza I">Prenza I</option>
                            <option value="Prenza II">Prenza II</option>
                            <option value="Santa Rosa I">Santa Rosa I</option>
                            <option value="Santa Rosa II">Santa Rosa II</option>
                            <option value="Saog">Saog</option>
                            <option value="Tabing Ilog">Tabing Ilog</option>
                        </optgroup>
                        <optgroup label="Meycauayan">
                            <option value="Bahay Pare">Bahay Pare</option>
                            <option value="Bancal">Bancal</option>
                            <option value="Banga">Banga</option>
                            <option value="Bayugo">Bayugo</option>
                            <option value="Camalig">Camalig</option>
                            <option value="Hulo">Hulo</option>
                            <option value="Iba">Iba</option>
                            <option value="Langka">Langka</option>
                            <option value="Lawa">Lawa</option>
                            <option value="Libtong">Libtong</option>
                            <option value="Liputan">Liputan</option>
                            <option value="Malhacan">Malhacan</option>
                            <option value="Pandayan">Pandayan</option>
                            <option value="Pantoc">Pantoc</option>
                            <option value="Perez">Perez</option>
                            <option value="Poblacion">Poblacion</option>
                            <option value="Saluysoy">Saluysoy</option>
                            <option value="Zamora">Zamora</option>
                        </optgroup>
                        <optgroup label="Norzagaray">
                            <option value="Bangkal">Bangkal</option>
                            <option value="Baraka">Baraka</option>
                            <option value="Bigte">Bigte</option>
                            <option value="Bitungol">Bitungol</option>
                            <option value="Matictic">Matictic</option>
                            <option value="Minuyan">Minuyan</option>
                            <option value="Partida">Partida</option>
                            <option value="Pinagtulayan">Pinagtulayan</option>
                            <option value="Poblacion">Poblacion</option>
                            <option value="San Mateo">San Mateo</option>
                            <option value="San Lorenzo">San Lorenzo</option>
                            <option value="Santa Monica">Santa Monica</option>
                        </optgroup>
                        <optgroup label="Obando">
                            <option value="Binuangan">Binuangan</option>
                            <option value="Catanghalan">Catanghalan</option>
                            <option value="Lawa">Lawa</option>
                            <option value="Paco">Paco</option>
                            <option value="Pag-asa">Pag-asa</option>
                            <option value="Panghulo">Panghulo</option>
                            <option value="Poblacion">Poblacion</option>
                            <option value="Salambao">Salambao</option>
                            <option value="Tawiran">Tawiran</option>
                        </optgroup>
                        <optgroup label="Pandi">
                            <option value="Bagbaguin">Bagbaguin</option>
                            <option value="Baka-Bakahan">Baka-Bakahan</option>
                            <option value="Cacarong Bata">Cacarong Bata</option>
                            <option value="Cacarong Matanda">Cacarong Matanda</option>
                            <option value="Cupang">Cupang</option>
                            <option value="Malibong Matanda">Malibong Matanda</option>
                            <option value="Mapulang Lupa">Mapulang Lupa</option>
                            <option value="Manatal">Manatal</option>
                            <option value="Masuso">Masuso</option>
                            <option value="Poblacion">Poblacion</option>
                            <option value="Real De Cacarong">Real De Cacarong</option>
                            <option value="Siling Bata">Siling Bata</option>
                            <option value="Siling Matanda">Siling Matanda</option>
                        </optgroup>
                        <optgroup label="Paombong">
                            <option value="Binakod">Binakod</option>
                            <option value="Kapitangan">Kapitangan</option>
                            <option value="Malumot">Malumot</option>
                            <option value="Masukol">Masukol</option>
                            <option value="Pinalagdan">Pinalagdan</option>
                            <option value="Poblacion">Poblacion</option>
                            <option value="San Isidro I">San Isidro I</option>
                            <option value="San Isidro II">San Isidro II</option>
                            <option value="San Jose">San Jose</option>
                            <option value="San Jose">San Roque</option>
                            <option value="San Jose">Santo Niño</option>
                            <option value="San Jose">Santa Cruz</option>
                        </optgroup>
                        <optgroup label="Plaridel">
                            <option value="Agnaya">Agnaya</option>
                            <option value="Bagong Silang">Bagong Silang</option>
                            <option value="Banga I">Banga I</option>
                            <option value="Banga II">Banga II</option>
                            <option value="Bulihan">Bulihan</option>
                            <option value="Culianin">Culianin</option>
                            <option value="Dampol">Dampol</option>
                            <option value="Lumang Bayan">Lumang Bayan</option>
                            <option value="Paltao">Paltao</option>
                            <option value="Parulan">Parulan</option>
                            <option value="Poblacion">Poblacion</option>
                            <option value="Rueda">Rueda</option>
                            <option value="San Jose">San Jose</option>
                            <option value="Santa Ines">Santa Ines</option>
                            <option value="Santo Niño">Santo Niño</option>
                            <option value="Sipat">Sipat</option>
                            <option value="Tabang">Tabang</option>
                        </optgroup>
                        <optgroup label="Pulilan">
                            <option value="Balatong A">Balatong A</option>
                            <option value="Balatong B">Balatong B</option>
                            <option value="Dulong Malabon">Dulong Malabon</option>
                            <option value="Inaon">Inaon</option>
                            <option value="Longos">Longos</option>
                            <option value="Lumbac">Lumbac</option>
                            <option value="Paltao">Paltao</option>
                            <option value="Peñabatan">Peñabatan</option>
                            <option value="Poblacion">Poblacion</option>
                            <option value="Santa Peregrina">Santa Peregrina</option>
                            <option value="Santo Cristo">Santo Cristo</option>
                            <option value="Tabon">Tabon</option>
                            <option value="Tibag">Tibag</option>
                            <option value="Tibaguin">Tibaguin</option>
                            <option value="Tinejero">Tinejero</option>
                        </optgroup>
                        <optgroup label="San Ildefonso">
                            <option value="Akle">Akle</option>
                            <option value="Alagao">Alagao</option>
                            <option value="Anyatam">Anyatam</option>
                            <option value="Bagong Barrio">Bagong Barrio</option>
                            <option value="Basuit">Basuit</option>
                            <option value="Basuit">Basuit</option>
                            <option value="Calasag">Calasag</option>
                            <option value="Gabihan">Gabihan</option>
                            <option value="Lapnit">Lapnit</option>
                            <option value="Malipampang">Malipampang</option>
                            <option value="Maasim">Maasim</option>
                            <option value="Matimbubong">Matimbubong</option>
                            <option value="Palapala">Palapala</option>
                            <option value="Pinaod">Pinaod</option>
                            <option value="Poblacion">Poblacion</option>
                            <option value="Pulong Tamo">Pulong Tamo</option>
                            <option value="San Juan">San Juan</option>
                            <option value="Sapang Dayap">Sapang Dayap</option>
                            <option value="Santa Catalina Bata">Santa Catalina Bata</option>
                            <option value="Santa Catalina Matanda">Santa Catalina Matanda</option>
                            <option value="Santo Cristo">Santo Cristo</option>
                            <option value="Sumandig">Sumandig</option>
                        </optgroup>
                        <optgroup label="San Miguel">
                            <option value="Balite">Balite</option>
                            <option value="Bardias">Bardias</option>
                            <option value="Baritan">Baritan</option>
                            <option value="Biak-Na-Bato">Biak-Na-Bato</option>
                            <option value="Buga">Buga</option>
                            <option value="Buliran">Buliran</option>
                            <option value="Calumpang">Calumpang</option>
                            <option value="Cambasi">Cambasi</option>
                            <option value="Camias">Camias</option>
                            <option value="Ilog-Bulo">Ilog-Bulo</option>
                            <option value="King Kabayo">King Kabayo</option>
                            <option value="Labne">Labne</option>
                            <option value="Lambakin">Lambakin</option>
                            <option value="Malibay">Malibay</option>
                            <option value="Mandile">Mandile</option>
                            <option value="Magmarale">Magmarale</option>
                            <option value="Pacalag">Pacalag</option>
                            <option value="Poblacion">Poblacion</option>
                            <option value="Sacdalan">Sacdalan</option>
                            <option value="Salangan">Salangan</option>
                            <option value="Sibul Springs">Sibul Springs</option>
                            <option value="Tartaro">Tartaro</option>
                            <option value="Tigpalas">Tigpalas</option>
                            <option value="Tukod">Tukod</option>
                            <option value="Umiray">Umiray</option>
                        </optgroup>
                        <optgroup label="San Rafael">
                            <option value="Banca-Banca">Banca-Banca</option>
                            <option value="Capihan">Capihan</option>
                            <option value="Coral na Bato">Coral na Bato</option>
                            <option value="Cruz na Daan">Cruz na Daan</option>
                            <option value="Diliman I">Diliman I</option>
                            <option value="Diliman II">Diliman II</option>
                            <option value="Kaingin">Kaingin</option>
                            <option value="Lias">Lias</option>
                            <option value="Maronquillo">Maronquillo</option>
                            <option value="Pasong Bangkal">Pasong Bangkal</option>
                            <option value="Pasong Callos">Pasong Callos</option>
                            <option value="Pasong Callos">Lias</option>
                            <option value="Poblacion">Poblacion</option>
                            <option value="Pulo">Pulo</option>
                            <option value="Salapungan">Salapungan</option>
                            <option value="Sampaloc">Sampaloc</option>
                            <option value="San Roque">San Roque</option>
                            <option value="San Vicente">San Vicente</option>
                            <option value="Sapang Bulak">Sapang Bulak</option>
                            <option value="Talacsan">Talacsan</option>
                            <option value="Tibagan">Tibagan</option>
                        </optgroup>
                        <optgroup label="Santa Maria">
                            <option value="Bagbaguin">Bagbaguin</option>
                            <option value="Balasing">Balasing</option>
                            <option value="Buenavista">Buenavista</option>
                            <option value="Bulac">Bulac</option>
                            <option value="Camangyanan">Camangyanan</option>
                            <option value="Caypombo">Caypombo</option>
                            <option value="Catmon">Catmon</option>
                            <option value="Lalakhan">Lalakhan</option>
                            <option value="Mag-asawang Sapa">Mag-asawang Sapa</option>
                            <option value="Mahabang Parang">Mahabang Parang</option>
                            <option value="Manggahan">Manggahan</option>
                            <option value="Poblacion">Poblacion</option>
                            <option value="Pulong Buhangin">Pulong Buhangin</option>
                            <option value="San Gabriel">San Gabriel</option>
                            <option value="Santa Clara">Santa Clara</option>
                            <option value="Santo Tomas">Santo Tomas</option>
                            <option value="Silangan">Silangan</option>
                            <option value="Tumana">Tumana</option>
                        </optgroup>
                    </select>
                </div>
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                    <label class="font-semibold text-lg">Age</label>
                    <input type="number" placeholder="Age" class="pl-3 border border-gray-500 h-10 rounded-md" v-model="age" required>
                </div>
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                    <label class="font-semibold text-lg">Gender</label>
                    <select class="pl-3 border border-gray-500 h-10 rounded-md" v-model="gender" required>
                        <option disabled>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>
                <button v-if="registering" class="bg-custom-primary w-3/4 md:w-2/5 lg:w-3/5 text-white py-2 rounded-xl uppercase mt-5 hover:bg-red-900 lg:col-span-2 place-self-center animate-pulse" disabled>Registering...</button>
                <button v-else class="bg-custom-primary w-3/4 md:w-2/5 lg:w-3/5 text-white py-2 rounded-xl uppercase mt-5 hover:bg-red-900 lg:col-span-2 place-self-center">Sign Up</button>
            </form>
            <div class="flex justify-center mt-10 gap-y-4 font-poppins font-semibold">
                <p>
                    You have an account?
                    <router-link :to="{ name: 'login' }" class="underline hover:text-custom-primary">Log in</router-link>
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import emailjs from 'emailjs-com';
const serverUrl = import.meta.env.VITE_SERVER_URL

const route = useRoute()
const router = useRouter()

const passwordType= ref('password')
const passwordIconType = ref('mdi:eye-off-outline')

const toggleShowPassword = () => {
    if(passwordType.value === 'password'){
        passwordType.value = 'text'
        passwordIconType.value = 'mdi:eye-outline'
        return
    }
    passwordType.value = 'password'
    passwordIconType.value = 'mdi:eye-off-outline'
}

const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const contactNumber = ref('')
const address = ref('')
const age = ref('')
const gender = ref('Select Gender')

const existingEmail = ref(false)

const registering = ref(false)
const errorRegistering = ref(false)

const register = async () => {
    const userData = {
        name: `${firstName.value} ${middleName.value} ${lastName.value}`,
        email: email.value,
        password: password.value,
        contactNumber: contactNumber.value,
        address: address.value,
        age: age.value,
        gender: gender.value,
    }
    
    try {
        registering.value = true
        const res = await axios.post(`${serverUrl}/send-otp`, {
            name: firstName.value,
            email: email.value,
        })
        
        if(res.data == 'existing email') return existingEmail.value = true
        router.push({
            path: '/register/otp-verification',
            query: {
                email: email.value
            }
        })

        localStorage.setItem('otp', res.data)
        localStorage.setItem('userData', JSON.stringify(userData))
        localStorage.setItem('timerMinutes', 4)
        localStorage.setItem('timerSeconds', 59)

        var templateParams = {
            to_name: firstName.value,
            otp: res.data,
            email: email.value,
            from_name: 'Inclucity',
        };

        emailjs
        .send(
        'service_jp4qqoo',
        'ytemplate_cguzxjo',
        templateParams,
        )
        .then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
            statusMessage.value = 'Message sent successfully!';
        },
        (error) => {
            console.log('FAILED...', error);
            statusMessage.value = 'Failed to send message. Please try again.';
        }
        );
    } catch (error) {
        errorRegistering.value = false
    }finally{
        registering.value = false
    }
}
</script>

<style scoped>
#container::-webkit-scrollbar {
    background-color: transparent;
    width: 3px;
}
#container::-webkit-scrollbar-thumb {
    background-color: #7B080E;
}
</style>