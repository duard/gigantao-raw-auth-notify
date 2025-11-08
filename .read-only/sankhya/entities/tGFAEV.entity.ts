import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFAEV', ['nunota', 'codevento', 'seqevento'], { unique: true })
@Entity('TGFAEV', { schema: 'SANKHYA' })
export class TgfaevEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'CODEVENTO' })
  codevento: number;

  @Column('int', { primary: true, name: 'SEQEVENTO' })
  seqevento: number;

  @Column('datetime', { name: 'DHOCOR' })
  dhocor: Date;

  @Column('text', { name: 'OCORRENCIA', nullable: true })
  ocorrencia: string | null;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfaevs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}
