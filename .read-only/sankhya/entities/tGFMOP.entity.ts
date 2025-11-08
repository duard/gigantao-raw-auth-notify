import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { Tgfedz1Entity } from './tGFEDZ1.entity';
import { Tgfedz2Entity } from './tGFEDZ2.entity';
import { Tgfedz3Entity } from './tGFEDZ3.entity';
import { Tgfedz4Entity } from './tGFEDZ4.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfoccEntity } from './tGFOCC.entity';

@Index('PK_TGFMOP', ['numov'], { unique: true })
@Entity('TGFMOP', { schema: 'SANKHYA' })
export class TgfmopEntity {
  @Column('int', { primary: true, name: 'NUMOV' })
  numov: number;

  @Column('datetime', { name: 'DHMOV', nullable: true })
  dhmov: Date | null;

  @Column('varchar', { name: 'CPF_CNPJ', length: 14 })
  cpfCnpj: string;

  @Column('varchar', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('varchar', {
    name: 'DIGITADO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  digitado: string | null;

  @Column('varchar', {
    name: 'EVENTOEXEC',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  eventoexec: string | null;

  @OneToOne(() => Tgfedz1Entity, (tgfedz1Entity) => tgfedz1Entity.numov2)
  tgfedz: Tgfedz1Entity;

  @OneToOne(() => Tgfedz2Entity, (tgfedz2Entity) => tgfedz2Entity.numov2)
  tgfedz2: Tgfedz2Entity;

  @OneToOne(() => Tgfedz3Entity, (tgfedz3Entity) => tgfedz3Entity.numov2)
  tgfedz3: Tgfedz3Entity;

  @OneToOne(() => Tgfedz4Entity, (tgfedz4Entity) => tgfedz4Entity.numov2)
  tgfedz4: Tgfedz4Entity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfmops)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TgfoccEntity, (tgfoccEntity) => tgfoccEntity.tgfmops)
  @JoinColumn([{ name: 'CODOCC', referencedColumnName: 'codocc' }])
  codocc: TgfoccEntity;
}
