import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPSEVENTO_2200_TRANSF', ['chave'], { unique: true })
@Entity('TFPSEVENTO_2200_TRANSF', { schema: 'SANKHYA' })
export class Tfpsevento_2200TransfEntity {
  @Column('varchar', { primary: true, name: 'CHAVE', length: 100 })
  chave: string;
}
