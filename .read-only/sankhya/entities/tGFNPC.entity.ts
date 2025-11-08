import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbplaEntity } from './tCBPLA.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TcsprjEntity } from './tCSPRJ.entity';

@Index('PK_TGFNPC', ['codnat', 'codproj'], { unique: true })
@Entity('TGFNPC', { schema: 'SANKHYA' })
export class TgfnpcEntity {
  @Column('int', { primary: true, name: 'CODNAT' })
  codnat: number;

  @Column('int', { primary: true, name: 'CODPROJ' })
  codproj: number;

  @Column('varchar', { name: 'PRIORIZARRATEIO', nullable: true, length: 1 })
  priorizarrateio: string | null;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tgfnpcs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODCTACTB', referencedColumnName: 'codctactb' }])
  codctactb: TcbplaEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgfnpcs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat2: TgfnatEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tgfnpcs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj2: TcsprjEntity;
}
