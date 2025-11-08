import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFCSZ', ['codparc', 'dhconsulta'], { unique: true })
@Entity('TGFCSZ', { schema: 'SANKHYA' })
export class TgfcszEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('datetime', { primary: true, name: 'DHCONSULTA' })
  dhconsulta: Date;

  @Column('text', { name: 'XMLRET', nullable: true })
  xmlret: string | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfcszs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfcszs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
