import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsictaEntity } from './tSICTA.entity';
import { TsiempEntity } from './tSIEMP.entity';

@Index('PK_TSIUCT', ['codusu', 'codemp'], { unique: true })
@Entity('TSIUCT', { schema: 'SANKHYA' })
export class TsiuctEntity {
  @Column('smallint', { primary: true, name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsiucts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tsiucts)
  @JoinColumn([{ name: 'CODCTABCOINT', referencedColumnName: 'codctabcoint' }])
  codctabcoint: TsictaEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tsiucts)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;
}
