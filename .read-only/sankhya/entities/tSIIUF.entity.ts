import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';
import { TsiufsEntity } from './tSIUFS.entity';

@Index('PK_TSIIUF', ['codemp', 'coduf', 'inscricao'], { unique: true })
@Entity('TSIIUF', { schema: 'SANKHYA' })
export class TsiiufEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'CODUF' })
  coduf: number;

  @Column('char', { primary: true, name: 'INSCRICAO', length: 14 })
  inscricao: string;

  @Column('datetime', { name: 'DTINIVALIDADE', nullable: true })
  dtinivalidade: Date | null;

  @Column('datetime', { name: 'DTFIMVALIDADE', nullable: true })
  dtfimvalidade: Date | null;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tsiiufs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tsiiufs)
  @JoinColumn([{ name: 'CODUF', referencedColumnName: 'coduf' }])
  coduf2: TsiufsEntity;
}
