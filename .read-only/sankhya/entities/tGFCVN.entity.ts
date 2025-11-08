import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfccvEntity } from './tGFCCV.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TcsprjEntity } from './tCSPRJ.entity';

@Index('PK_TGFCVN', ['codconvenio'], { unique: true })
@Entity('TGFCVN', { schema: 'SANKHYA' })
export class TgfcvnEntity {
  @Column('int', { primary: true, name: 'CODCONVENIO' })
  codconvenio: number;

  @Column('varchar', { name: 'DESCRCONVENIO', nullable: true, length: 30 })
  descrconvenio: string | null;

  @Column('varchar', { name: 'TIPOFATURAMENTO', nullable: true, length: 15 })
  tipofaturamento: string | null;

  @Column('int', { name: 'DTACRITICA' })
  dtacritica: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @ManyToOne(() => TgfccvEntity, (tgfccvEntity) => tgfccvEntity.tgfcvns, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODCANAL', referencedColumnName: 'codcanal' }])
  codcanal: TgfccvEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfcvns, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tgfcvns, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj: TcsprjEntity;
}
