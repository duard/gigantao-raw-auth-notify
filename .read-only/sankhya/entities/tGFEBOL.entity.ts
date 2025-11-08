import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TmdfmgEntity } from './tMDFMG.entity';

@Index('PK_TGFEBOL', ['codfila', 'nufin'], { unique: true })
@Entity('TGFEBOL', { schema: 'SANKHYA' })
export class TgfebolEntity {
  @Column('int', { primary: true, name: 'CODFILA' })
  codfila: number;

  @Column('int', { primary: true, name: 'NUFIN' })
  nufin: number;

  @ManyToOne(() => TmdfmgEntity, (tmdfmgEntity) => tmdfmgEntity.tgfebols, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODFILA', referencedColumnName: 'codfila' }])
  codfila2: TmdfmgEntity;
}
