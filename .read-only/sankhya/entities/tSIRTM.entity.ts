import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TsirtdEntity } from './tSIRTD.entity';

@Index('PK_TSIRTM', ['codigo', 'tipreg'], { unique: true })
@Entity('TSIRTM', { schema: 'SANKHYA' })
export class TsirtmEntity {
  @Column('smallint', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('char', { primary: true, name: 'TIPREG', length: 1 })
  tipreg: string;

  @Column('char', { name: 'TITULO', nullable: true, length: 40 })
  titulo: string | null;

  @Column('smallint', { name: 'TAMREG' })
  tamreg: number;

  @Column('smallint', { name: 'POSINITIPREG' })
  posinitipreg: number;

  @Column('text', { name: 'SP_CHAMADA', nullable: true })
  spChamada: string | null;

  @OneToMany(() => TsirtdEntity, (tsirtdEntity) => tsirtdEntity.tsirtm)
  tsirtds: TsirtdEntity[];
}
