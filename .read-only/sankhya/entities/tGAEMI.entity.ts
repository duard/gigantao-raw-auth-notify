import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgagarEntity } from './tGAGAR.entity';

@Index('PK_TGAEMI', ['nrogar', 'codparc'], { unique: true })
@Entity('TGAEMI', { schema: 'SANKHYA' })
export class TgaemiEntity {
  @Column('int', { primary: true, name: 'NROGAR' })
  nrogar: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgaemis)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgaemis)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgagarEntity, (tgagarEntity) => tgagarEntity.tgaemis)
  @JoinColumn([{ name: 'NROGAR', referencedColumnName: 'nrogar' }])
  nrogar2: TgagarEntity;
}
