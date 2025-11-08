import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TmdfmgEntity } from './tMDFMG.entity';

@Index('PK_TMDFMD', ['codfila', 'sequencia'], { unique: true })
@Entity('TMDFMD', { schema: 'SANKHYA' })
export class TmdfmdEntity {
  @Column('int', { primary: true, name: 'CODFILA' })
  codfila: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'EMAIL', nullable: true, length: 80 })
  email: string | null;

  @ManyToOne(() => TmdfmgEntity, (tmdfmgEntity) => tmdfmgEntity.tmdfmds)
  @JoinColumn([{ name: 'CODFILA', referencedColumnName: 'codfila' }])
  codfila2: TmdfmgEntity;
}
