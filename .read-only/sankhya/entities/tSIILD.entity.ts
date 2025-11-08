import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsililEntity } from './tSILIL.entity';

@Index('PK_TSIILD', ['codild'], { unique: true })
@Entity('TSIILD', { schema: 'SANKHYA' })
export class TsiildEntity {
  @Column('int', { primary: true, name: 'CODILD' })
  codild: number;

  @Column('varchar', { name: 'TABELA', nullable: true, length: 100 })
  tabela: string | null;

  @Column('int', { name: 'NROLINHA', nullable: true })
  nrolinha: number | null;

  @Column('varchar', { name: 'IDEXTERNO', nullable: true, length: 256 })
  idexterno: string | null;

  @Column('datetime', { name: 'DHEVENTO' })
  dhevento: Date;

  @Column('varchar', { name: 'EVENTO', length: 10 })
  evento: string;

  @Column('varchar', { name: 'DESCRICAO', length: 3103 })
  descricao: string;

  @ManyToOne(() => TsililEntity, (tsililEntity) => tsililEntity.tsiilds)
  @JoinColumn([{ name: 'CODLIL', referencedColumnName: 'codlil' }])
  codlil: TsililEntity;
}
