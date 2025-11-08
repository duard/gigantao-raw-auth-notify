import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgapoiEntity } from './tGAPOI.entity';

@Index('PK_TGARPO', ['codport'], { unique: true })
@Entity('TGARPO', { schema: 'SANKHYA' })
export class TgarpoEntity {
  @Column('int', { primary: true, name: 'CODPORT' })
  codport: number;

  @Column('varchar', { name: 'TIPO', length: 1, default: () => "'N'" })
  tipo: string;

  @Column('int', { name: 'CODCONT', nullable: true })
  codcont: number | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('int', { name: 'CODVEIC', nullable: true })
  codveic: number | null;

  @Column('int', { name: 'CODMOTO', nullable: true })
  codmoto: number | null;

  @Column('datetime', { name: 'DHCHEGA', nullable: true })
  dhchega: Date | null;

  @Column('datetime', { name: 'DHENTRA', nullable: true })
  dhentra: Date | null;

  @Column('datetime', { name: 'DHSAIDA', nullable: true })
  dhsaida: Date | null;

  @Column('varchar', { name: 'OBSERV', nullable: true, length: 220 })
  observ: string | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('smallint', { name: 'CODUF', nullable: true })
  coduf: number | null;

  @Column('varchar', { name: 'MOTORISTA', nullable: true, length: 80 })
  motorista: string | null;

  @Column('varchar', { name: 'PLACA', nullable: true, length: 7 })
  placa: string | null;

  @Column('int', { name: 'NUMPESAGEM', nullable: true })
  numpesagem: number | null;

  @Column('int', { name: 'NUCLL', nullable: true })
  nucll: number | null;

  @Column('varchar', { name: 'MOTIVO', nullable: true, length: 100 })
  motivo: string | null;

  @Column('int', { name: 'NUMPORT', nullable: true })
  numport: number | null;

  @Column('int', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('varchar', {
    name: 'MODALIDADE',
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  modalidade: string | null;

  @OneToMany(() => TgapoiEntity, (tgapoiEntity) => tgapoiEntity.codport2)
  tgapois: TgapoiEntity[];
}
