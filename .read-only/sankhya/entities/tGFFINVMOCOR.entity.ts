import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';

@Index('PK_TGFFINVMOCOR', ['ticketnumber'], { unique: true })
@Entity('TGFFINVMOCOR', { schema: 'SANKHYA' })
export class TgffinvmocorEntity {
  @Column('datetime', { name: 'DTOCOR' })
  dtocor: Date;

  @Column('varchar', { name: 'OCORRENCIA', nullable: true, length: 1000 })
  ocorrencia: string | null;

  @Column('varchar', { primary: true, name: 'TICKETNUMBER', length: 15 })
  ticketnumber: string;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tgffinvmocors, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin: TgffinEntity;
}
