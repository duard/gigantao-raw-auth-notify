import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfpecEntity } from './tGFPEC.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFTPE', ['codtipopesagem'], { unique: true })
@Entity('TGFTPE', { schema: 'SANKHYA' })
export class TgftpeEntity {
  @Column('smallint', { primary: true, name: 'CODTIPOPESAGEM' })
  codtipopesagem: number;

  @Column('varchar', { name: 'DESCRTIPOPESAGEM', length: 40 })
  descrtipopesagem: string;

  @Column('varchar', { name: 'TIPOPESAGEM', length: 1, default: () => "'S'" })
  tipopesagem: string;

  @Column('varchar', { name: 'SOLICITALIB', length: 1, default: () => "'N'" })
  solicitalib: string;

  @Column('varchar', { name: 'ATUALIZANOTA', length: 1, default: () => "'N'" })
  atualizanota: string;

  @Column('varchar', { name: 'IMPRIMETICKET', length: 1, default: () => "'N'" })
  imprimeticket: string;

  @Column('varchar', { name: 'TIPOVINC', length: 1, default: () => "'N'" })
  tipovinc: string;

  @Column('varchar', {
    name: 'CONFEREENTRADA',
    length: 1,
    default: () => "'N'",
  })
  confereentrada: string;

  @Column('varchar', { name: 'CONFERESAIDA', length: 1, default: () => "'N'" })
  conferesaida: string;

  @Column('varchar', { name: 'PERMITEDEVOL', length: 1, default: () => "'N'" })
  permitedevol: string;

  @Column('varchar', {
    name: 'VALDIVERGENCIA',
    length: 1,
    default: () => "'N'",
  })
  valdivergencia: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('varchar', {
    name: 'ABRENOVAPESAGEM',
    length: 1,
    default: () => "'N'",
  })
  abrenovapesagem: string;

  @Column('float', { name: 'PERCDIVENTRADA', nullable: true, precision: 53 })
  percdiventrada: number | null;

  @Column('float', { name: 'PERCDIVSAIDA', nullable: true, precision: 53 })
  percdivsaida: number | null;

  @Column('varchar', { name: 'PEDIDONOTA', nullable: true, length: 1 })
  pedidonota: string | null;

  @OneToMany(() => TgfpecEntity, (tgfpecEntity) => tgfpecEntity.codtipopesagem)
  tgfpecs: TgfpecEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgftpes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
