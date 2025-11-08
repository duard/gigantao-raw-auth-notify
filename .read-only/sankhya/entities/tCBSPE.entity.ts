import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';

@Index('PK_TCBSPE', ['codemp', 'tipo', 'codorig', 'coddest'], { unique: true })
@Entity('TCBSPE', { schema: 'SANKHYA' })
export class TcbspeEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { primary: true, name: 'TIPO', length: 2 })
  tipo: string;

  @Column('int', { primary: true, name: 'CODORIG' })
  codorig: number;

  @Column('int', { primary: true, name: 'CODDEST' })
  coddest: number;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcbspes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;
}
