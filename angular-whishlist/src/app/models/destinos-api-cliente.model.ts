import { DestinoViaje } from './destino-viaje-model';

export class DestinosApiClient {
	destinos: DestinoViaje[] = [];

	add(d: DestinoViaje) {
		this.destinos.push(d);
	}

	getAll(): DestinoViaje[] {
		return this.destinos;
	}
}