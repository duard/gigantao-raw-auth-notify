import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcseqpEntity } from './tCSEQP.entity';
import { TcsprjEntity } from './tCSPRJ.entity';

@Index('PK_TAPEQJ', ['codproj', 'nuequipe', 'dhinicial'], { unique: true })
@Entity('TAPEQJ', { schema: 'SANKHYA' })
export class TapeqjEntity {
  @Column('int', { primary: true, name: 'CODPROJ' })
  codproj: number;

  @Column('int', { primary: true, name: 'NUEQUIPE' })
  nuequipe: number;

  @Column('int', { name: 'CODPROJFINAL' })
  codprojfinal: number;

  @Column('datetime', { primary: true, name: 'DHINICIAL' })
  dhinicial: Date;

  @Column('datetime', { name: 'DHFINAL', nullable: true })
  dhfinal: Date | null;

  @ManyToOne(() => TcseqpEntity, (tcseqpEntity) => tcseqpEntity.tapeqjs)
  @JoinColumn([{ name: 'NUEQUIPE', referencedColumnName: 'nuequipe' }])
  nuequipe2: TcseqpEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tapeqjs)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj2: TcsprjEntity;
}
